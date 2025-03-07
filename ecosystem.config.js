module.exports = {
    apps: [
      {
        name: "zapin",
        script: "app.js", // Ganti dengan file utama aplikasi Anda
        exec_mode: "fork",
        instances: 1, // Mode fork hanya menggunakan 1 instance
        max_memory_restart: "2048M",
        env: {
          NODE_ENV: "production",
          PORT: 3100, // Sesuaikan dengan port yang digunakan
        },
      },
    ],
  };
  