const mysql2 = require("mysql2");
require("dotenv").config();

// Buat koneksi database dengan pool
const db = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// ✅ Cek koneksi saat aplikasi dimulai
db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ MySQL Connection Failed:", err);
  } else {
    console.log("✅ MySQL Connected Successfully!");
    connection.release(); // Pastikan koneksi dilepas setelah pengecekan
  }
});

// ✅ Auto-reconnect jika koneksi MySQL terputus
db.on("error", (err) => {
  console.error("MySQL Connection Error:", err);
  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    console.log("Reconnecting to MySQL...");
    db.getConnection((error, connection) => {
      if (error) {
        console.error("Reconnection failed:", error);
      } else {
        console.log("Reconnected to MySQL");
        connection.release();
      }
    });
  }
});

// ✅ Perbaiki setStatus dengan query parameterized
const setStatus = async (device, status) => {
  try {
    await db.promise().execute(`UPDATE devices SET status = ? WHERE body = ?`, [status, device]);
    return true;
  } catch (error) {
    console.error("Error updating status:", error);
    return false;
  }
};

// ✅ Perbaiki dbQuery untuk menggunakan Promise dan menangani error
function dbQuery(query, params = []) {
  return new Promise((resolve, reject) => {
    db.query(query, params, (err, res) => {
      if (err) {
        console.error("Database query error:", err);
        return reject(err);
      }
      resolve(res);
    });
  });
}



// Export semua fungsi
module.exports = { setStatus, dbQuery, db };
