const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  // const products = await Product.find({ rating: { $gt: 4.7 } }) 
  // const products = await Product.find({
  //   featured: true,
  //   nbHits: products.length,
  // });
  const products = await Product.find({ name: "vase table" });
  res.status(200).json({ products });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "products route" });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
