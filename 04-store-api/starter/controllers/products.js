const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  // const products = await Product.find({ rating: { $gt: 4.7 } }) 
  // const products = await Product.find({
  //   featured: true,
  //   nbHits: products.length,
  // });
  // const products = await Product.find({ name: "vase table" });

  const products = await Product.find({ name: "vase table" });
  res.status(200).json({ products, nbHits: products.length});
};

const getAllProducts = async (req, res) => {
  const filters = req.query;
  const products = await Product.find(filters);
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
