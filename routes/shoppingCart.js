const express = require('express');
const router = express.Router();

// Import the shopping cart controller
const ShoppingCartController = require('../controllers/ShoppingcartController');

// Routes for shopping carts
router.post('/', ShoppingCartController.create); // Route to create a new shopping cart
router.get('/', ShoppingCartController.getAll); // Route to get all shopping carts
router.delete('/:id', ShoppingCartController.delete); // Route to delete a shopping cart by its ID
router.put('/:id', ShoppingCartController.update); // Route to update a shopping cart by its ID

module.exports = router;
