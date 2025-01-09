const express = require('express');
const router = express.Router();

const { createProduct, getAllProducts } = require('../controllers/productController');
const { uploadProductImage } = require('../controllers/uploadsController');
