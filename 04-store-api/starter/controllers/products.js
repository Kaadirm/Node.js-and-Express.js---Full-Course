const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  // const products = await Product.find({ rating: { $gt: 4.7 } })
  // const products = await Product.find({
  //   featured: true,
  //   nbHits: products.length,
  // });
  // const products = await Product.find({ name: "vase table" });

  const products = await Product.find({}).sort("-name -price");
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  const { name, price, featured, rating, company, sort } = req.query;
  const queryObject = {};

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  if (price) {
    queryObject.price = { $gte: price };
  }

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }

  if (rating) {
    queryObject.rating = { $gte: rating };
  }

  if (company) {
    queryObject.company = company;
  }

  let products;
  if (sort) {
    const sortOptions = sort.split(",").join(" ");
    products = await Product.find(queryObject).sort(sortOptions);
  } else {
    products = await Product.find(queryObject);
  }

  res.status(200).json({ nbHits: products.length, products });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
