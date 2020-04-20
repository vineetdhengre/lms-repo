const express = require("express");
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const app = express();
var server = app.listen(8000);
var io = require("socket.io").listen(server);
const key = require("./mongo").mongoURI;
const client = new MongoClient(key);


mongoose
  .connect(key, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB Connected");

    async function run() {
      const dbName = "test";
      try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);

        // Use the collection "people"
        const col = db.collection("people");

        const myDoc = await col.findOne({
          idd: "1",
        });

        console.log(myDoc.name);
        io.on("connection", (socket) => {
          console.log("data connected");
          socket.emit("chat message", myDoc.name.first);
        });
        
      } catch (err) {
        console.log(err.stack);
      } finally {
        await client.close();
      }
    }

    run().catch(console.dir);
  });

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/data", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");
});
