console.clear();

const express = require("express");
const app = express();
const port = 5000;

// importing data from sample data.js
const {products, people} = require("./data")

app.get("/", (req, res) => {
  res.send(`<h1>Home Page</h1><a href="/api/products">products</a>`)
})

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const {id, name, image} = product;
    return {id, name, image}
  })
  res.json(newProducts)
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})

// console.log(people);