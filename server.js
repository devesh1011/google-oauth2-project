const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/protected", (req, res) => {
  res.send("Protected route");
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
