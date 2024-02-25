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

// specific product routes
app.get("/api/products/:productId", (req, res) => {
  const requestId = parseInt(req.params.productId)

  const singleProduct = products.find(product => product.id === requestId) 
  
  if(!singleProduct){
    return res.status(404).send(`<h1>Product not found</h1>`)
  }
  
  return res.json(singleProduct)
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})

// console.log(people);