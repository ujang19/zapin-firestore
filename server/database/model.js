const { dbQuery } = require("./index");
const cache = require("./../lib/cache");

const myCache = cache.myCache;

// 🔍 Cek apakah command eksis dalam tabel autoreplies (Type: Equal)
const isExistsEqualCommand = async (command, number) => {
  try {
    // Cek cache terlebih dahulu
    const cacheKey = `equal_${command}_${number}`;
    if (myCache.has(cacheKey)) {
      return myCache.get(cacheKey);
    }

    // Cari device berdasarkan nomor
    const checkDevice = await dbQuery(
      "SELECT id FROM devices WHERE body = ? LIMIT 1",
      [number]
    );
    if (checkDevice.length === 0) return [];

    const device_id = checkDevice[0].id;

    // Cari di tabel autoreplies dengan prepared statement
    const data = await dbQuery(
      "SELECT * FROM autoreplies WHERE keyword = ? AND type_keyword = 'Equal' AND device_id = ? AND status = 'Active' LIMIT 1",
      [command, device_id]
    );

    if (data.length === 0) return [];

    // Simpan hasil ke cache
    myCache.set(cacheKey, data);
    return data;
  } catch (error) {
    console.error("❌ Error in isExistsEqualCommand:", error);
    return [];
  }
};

// 🔍 Cek apakah command eksis dalam tabel autoreplies (Type: Contain)
const isExistsContainCommand = async (command, number) => {
  try {
    const cacheKey = `contain_${command}_${number}`;
    if (myCache.has(cacheKey)) {
      return myCache.get(cacheKey);
    }

    const checkDevice = await dbQuery(
      "SELECT id FROM devices WHERE body = ? LIMIT 1",
      [number]
    );
    if (checkDevice.length === 0) return [];

    const device_id = checkDevice[0].id;

    // Menggunakan prepared statement dengan `LIKE` untuk pencarian dalam teks
    const data = await dbQuery(
      "SELECT * FROM autoreplies WHERE ? LIKE CONCAT('%', keyword, '%') AND type_keyword = 'Contain' AND device_id = ? AND status = 'Active' LIMIT 1",
      [command, device_id]
    );

    if (data.length === 0) return [];

    myCache.set(cacheKey, data);
    return data;
  } catch (error) {
    console.error("❌ Error in isExistsContainCommand:", error);
    return [];
  }
};

// 🔍 Ambil URL Webhook dari database
const getUrlWebhook = async (number) => {
  try {
    const cacheKey = `webhook_${number}`;
    if (myCache.has(cacheKey)) {
      return myCache.get(cacheKey);
    }

    const data = await dbQuery(
      "SELECT webhook FROM devices WHERE body = ? LIMIT 1",
      [number]
    );

    const url = data.length > 0 ? data[0].webhook : null;
    myCache.set(cacheKey, url);
    return url;
  } catch (error) {
    console.error("❌ Error in getUrlWebhook:", error);
    return null;
  }
};

// 🔍 Ambil informasi perangkat (device)
const getDevice = async (deviceBody) => {
  try {
    const cacheKey = `device_${deviceBody}`;
    if (myCache.has(cacheKey)) {
      return myCache.get(cacheKey);
    }

    const data = await dbQuery(
      "SELECT * FROM devices WHERE body = ? LIMIT 1",
      [deviceBody]
    );

    if (data.length === 0) return null;

    myCache.set(cacheKey, data);
    return data;
  } catch (error) {
    console.error("❌ Error in getDevice:", error);
    return null;
  }
};

// Export semua fungsi
module.exports = {
  isExistsEqualCommand,
  isExistsContainCommand,
  getUrlWebhook,
  getDevice,
};
