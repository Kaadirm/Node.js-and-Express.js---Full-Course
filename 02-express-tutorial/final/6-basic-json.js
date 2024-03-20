console.clear();

const express = require("express");
const app = express();
const port = 5000;

// importing data from sample data.js
const {products, people} = require("./data")

app.get("/", (req, res) => {
  res.json(products)
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})

// console.log(people);