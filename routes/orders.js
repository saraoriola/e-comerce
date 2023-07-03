const express = require('express');
const router = express.Router();

// Import the order controller
const OrdersController = require('../controllers/OrderController');

// Routes for orders
router.post('/', OrdersController.create); // Route to create a new order
router.get('/', OrdersController.getAll); // Route to get all orders
router.delete('/:id', OrdersController.delete); // Route to delete an order by its ID
router.put('/:id', OrdersController.update); // Route to update an order by its ID

module.exports = router;
