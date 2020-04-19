const express = require("express");
const mongoose = require("mongoose");

const app = express();
var server = app.listen(8000);
var io = require("socket.io").listen(server);
const key = require("./mongo").mongoURI;
const fun = require("./data");

mongoose
  .connect(key, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB Connected");

    fun();
  });
const port = 8000;

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/data", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});


io.on('connection', (socket) => {
  console.log('a user connected');
});

