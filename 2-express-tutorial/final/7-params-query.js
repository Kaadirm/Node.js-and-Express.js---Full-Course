console.clear();

const express = require("express");
const app = express();
const port = 5000;

// importing data from sample data.js
const { products, people } = require("./data");

app.get("/", (req, res) => {
  res.send(`<h1>Home Page</h1><a href="/api/products">products</a>`);
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

// specific product routes
app.get("/api/products/:productId", (req, res) => {
  const requestId = parseInt(req.params.productId);

  const singleProduct = products.find((product) => product.id === requestId);

  if (!singleProduct) {
    return res.status(404).send(`<h1>Product not found</h1>`);
  }

  return res.json(singleProduct);
});

// detailed and nested routes
app.get("/api/products/:productId/reviews/:reviewId", (req, res) => {
  console.log(req.params);
  res.send(`<h1>Welcome Reviews</h1>`);
});

app.get("/api/v1/query", (req, res) => {
  // console.log(req.query);
  const {search, limit} = req.query;
  let sortedProducts = [...products];

  if(search){
    sortedProducts = sortedProducts.filter(product => {
      return product.name.startsWith(search)
    })
  }
  if(limit){
    sortedProducts = sortedProducts.slice(0,Number(limit))
  }
  if (sortedProducts.length < 1) {
    return res.status(200).send(`<h1>There are no products found</h1>`)
    // return res.status(200).json({succes: true, data: []})
  }
   res.status(200).json(sortedProducts)
  // res.send("hello world");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// console.log(people);
