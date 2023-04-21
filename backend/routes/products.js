const express = require("express");
const router = express.Router();
const productController = require("../controllers/products");

// GET all products
router.get("/", productController.getAllProducts);

// GET a single product by ID
router.get("/:id", productController.getProductById);

module.exports = router;
