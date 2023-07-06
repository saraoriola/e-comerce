const express = require('express');
const router = express.Router();

// Import the category controller
const ProductController = require('../controllers/ProductController');

// Routes for categories
// CREATE
router.post('/products', ProductController.createProduct);

// READ
router.get('/products/', ProductController.getProducts);
router.get('/products/:id', ProductController.getProductById);
router.get('/products/search', ProductController.searchProductByName);
router.get('/products/search/price', ProductController.searchProductByPriceRange);
router.get('/products/price/descending', ProductController.getProductsByPriceDescending);

// UPDATE
router.put('/products/:id', ProductController.updateProduct);

// DELETE
router.delete('/products/:id', ProductController.deleteProduct);

router.get('/products/names', ProductController.getOnlyNamesOfProductsAndCategories);

module.exports = router;
