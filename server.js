"use strict";
const wa = require("./server/whatsapp"); // Pakai sistem autentikasi dari whatsapp.js
const fs = require("fs");
const dbs = require("./server/database/index");
require("dotenv").config();
const lib = require("./server/lib");
global.log = lib.log;

const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

// Increase server timeout to 30 seconds
server.setTimeout(30000);

// Host and port configuration
//const host = "127.0.0.1";
const port = 3800;

const { Server } = require("socket.io");
const io = new Server(server, {
  pingInterval: 25000,
  pingTimeout: 10000,
  connectTimeout: 30000,
});

// Middleware to track request timing and detect 408 errors
app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  req.io = io;
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
  global.log.info(`Server running on ${host}:${port}`);
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
