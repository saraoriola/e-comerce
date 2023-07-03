const express = require('express');
const router = express.Router();

// Import the product controller
const ProductController = require('../controllers/ProductController');

// Routes for products
router.post('/', ProductController.create); // Route to create a new product
router.get('/', ProductController.getAll); // Route to get all products
router.delete('/:id', ProductController.delete); // Route to delete a product by its ID
router.put('/:id', ProductController.update); // Route to update a product by its ID

module.exports = router;
