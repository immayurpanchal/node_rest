const express = require('express');

const productController = require('../controllers/product');

const router = express.Router();

// GET getProducts
router.get('/getProducts', productController.getProducts);

module.exports = router;