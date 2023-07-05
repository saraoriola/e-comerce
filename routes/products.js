const express = require('express');
const router = express.Router();

// Import the category controller
const ProductController = require('../controllers/ProductController');

// Routes for categories
router.post('/', ProductController.createProduct); // Route to create a new product
router.get('/id/:id', ProductController.getProductById);
router.get('/', ProductController.getAll);
router.put('/id/:id', ProductController.updateProduct); 
router.delete('/id/:id', ProductController.deleteProduct); 


module.exports = router;
