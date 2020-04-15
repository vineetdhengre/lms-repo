const express = require("express");
const mongoose = require("mongoose");

const app = express();

const key = require("./mongo").mongoURI;
const fun = require('./data');

mongoose
  .connect(key, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB Connected");

    // fun();
  });
const port = 8000;

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});

