const cookieParser = require("cookie-parser");
const socketIO = require("socket.io");
const config = require("./config");
const express = require("express");
const tarkine = require("tarkine");
const http = require("http");

const app = express();
const server = http.createServer(app);

const io = new socketIO.Server(server);

const PORT = process.env.PORT || config.port;

global.IO = io;

// Local URL is used by the router/views
global.remoteURL = `http://localhost:${PORT}`;

app.set("view engine", "html");
app.engine("html", tarkine.renderFile);

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.use(express.json());

app.use("/", require("./router"));

server.listen(PORT, () => {
  console.log("--------------------------------");
  console.log("Server started successfully");
  console.log(`LOCAL: http://localhost:${PORT}`);
  console.log("--------------------------------");
});