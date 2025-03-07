"use strict";
const path = require('path');
const wa = require(path.join(__dirname, 'server', 'whatsapp.js'));
const fs = require("fs");
const dbs = require("./server/database/index");
require("dotenv").config();
const lib = require("./server/lib");
global.log = lib.log;

const express = require("express");
const cors = require("cors"); // Import CORS
const app = express();
const http = require("http");
const server = http.createServer(app);

// Increase server timeout to 30 seconds
server.setTimeout(30000);

// Host and port configuration
const host = "0.0.0.0";
const port = process.env.PORT || 3100; // Ensure the app listens on the assigned port.

const { Server } = require("socket.io");
const io = new Server(server, {
  pingInterval: 25000,
  pingTimeout: 10000,
  connectTimeout: 30000,
});

// CORS Configuration
app.use(cors({
  origin: "https://zapin.my.id", // Izinkan hanya dari domain Laravel
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Izinkan credentials seperti cookies atau headers auth
}));

// Middleware to track request timing and detect 408 errors
app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  req.io = io;
  
  // Menambahkan listener untuk mendeteksi status code 408
  res.on("finish", () => {
    if (res.statusCode === 408) {
      global.log.error("408 Request Timeout detected, restarting the application...");
      
      // Menggunakan PM2 untuk merestart aplikasi jika status 408 terdeteksi
      const pm2 = require("pm2");
      pm2.connect((err) => {
        if (err) {
          global.log.error("Failed to connect to PM2:", err);
          return;
        }
        pm2.restart("zapinapi", (err) => {
          if (err) {
            global.log.error("Failed to restart application:", err);
          } else {
            global.log.info("Application restarted due to 408 error.");
          }
          pm2.disconnect();
        });
      });
    }
  });

  next();
});

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb", parameterLimit: 100000 }));
app.use(bodyParser.json());
app.use(express.static("src/public"));
app.use(require("./server/router"));

// START CONNECTION FROM whatsapp.js
io.on("connection", (socket) => {
  global.log.info("Socket.IO: User connected");
  socket.on("StartConnection", (data) => wa.connectToWhatsApp(data, io));
  socket.on("ConnectViaCode", (data) => wa.connectToWhatsApp(data, io, true));
  socket.on("LogoutDevice", (device) => wa.deleteCredentials(device, io));
  socket.on("disconnect", () => global.log.info("Socket.IO: User disconnected"));
  socket.on("error", (err) => global.log.error("Socket.IO error:", err));
});

// Start server
server.listen(port, host, () => {
  global.log.info(`Server running on ${port}`);
});

// Enhanced error monitoring
process.on("unhandledRejection", (reason, promise) => {
  global.log.error({
    message: "Unhandled Rejection",
    promise,
    reason,
  });
});

process.on("uncaughtException", (err) => {
  global.log.error({
    message: "Uncaught Exception",
    error: err.stack,
  });
});
