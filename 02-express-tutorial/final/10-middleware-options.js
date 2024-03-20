console.clear();

const express = require("express");
const app = express();
const morgan = require("morgan")
const logger = require("./logger");
const authorize = require("./authorize");
const port = 5000;
// req => middleware => res

// 1. use vs route
// 2. options - our own / express / third party

// app.use("/api", [authorize, logger]);
// app.use(morgan("dev"))
// app.use(morgan("combined"))
app.use(morgan("tiny"))
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
