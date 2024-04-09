const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  // const products = await Product.find({ rating: { $gt: 4.7 } })
  // const products = await Product.find({
  //   featured: true,
  //   nbHits: products.length,
  // });
  // const products = await Product.find({ name: "vase table" });

  const products = await Product.find({}).limit(2).skip(0);
  res.status(200).json({ nbHits: products.length, products });
};

const getAllProducts = async (req, res) => {
  const { name, price, featured, rating, company, sort, fields } = req.query;
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

  let result = Product.find(queryObject);

  // sort
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }

  // fields
  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    result = result.select(fieldsList);
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);


  const products = await result;
  res.status(200).json({ nbHits: products.length, products });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
