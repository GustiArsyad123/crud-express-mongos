// server.js
// console.log("May Node be with you, still running");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// import library mongo
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb-connection-string", (err, client) => {
  // ... do something here
});

//app.get(endpoint, callback);
app.listen(3000, function () {
  console.log(`Listening on 3000`);
});

// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }));

//example
// // We normally abbreviate `request` to `req` and `response` to `res`.
// app.get('/', function (req, res) {
//   // do something here
// })

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  // Note: __dirname is the current directory you're in. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
});

app.post("/quotes", (req, res) => {
  //console.log("Hello!, this testing");
  console.log(req.body);
});
