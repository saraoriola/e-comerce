const express = require('express');
const router = express.Router();
const {authMiddleware, isAdmin} = require('../middleware/authMiddleware');

// Import the product controller
const ProductController = require('../controllers/ProductController');

// Routes for products
// CREATE
router.post('/products', authMiddleware, isAdmin, ProductController.createProduct); // Route to create a new product

// READ
router.get('/products/', ProductController.getProducts); // Route to get all products
router.get('/products/:id', ProductController.getProductById); // Route to get a product by its ID
router.get('/products/search', ProductController.searchProductByName); // Route to search products by name
router.get('/products/search/price', ProductController.searchProductByPriceRange); // Route to search products by price range
router.get('/products/price/descending', ProductController.getProductsByPriceDescending); // Route to get products ordered by price descending
router.get('/products/names', ProductController.getOnlyNamesOfProductsAndCategories); // Route to get only the names of products and categories

// UPDATE
router.put('/products/:id', authMiddleware, isAdmin, ProductController.updateProduct); // Route to update a product by its ID

// DELETE
router.delete('/products/:id', authMiddleware, isAdmin, ProductController.deleteProduct); // Route to delete a product by its ID

module.exports = router;
