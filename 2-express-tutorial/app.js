console.clear();

const express = require("express");
const app = express();
const port = 5000;
const logger = require("./logger");
const authorize = require("./authorize");
// req => middleware => res
app.use("/api", [authorize, logger]);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api", (req, res) => {
  // console.log(req.user)
  res.send("API");
});
app.get("/api/products", (req, res) => {
  res.send("API Products");
});
app.get("/api/items", (req, res) => {
  res.send("API Items");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
