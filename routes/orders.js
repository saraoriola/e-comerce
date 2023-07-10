const express = require('express');
const router = express.Router();

// Import the order controller
const OrderController = require('../controllers/OrderController');

// CREATE
router.post('/orders', OrderController.createOrder); // Route to create a new order

// READ
router.get('/orders', OrderController.getOrders); // Route to get all orders with their products

module.exports = router;
