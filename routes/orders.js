const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');

// Ruta para obtener todas las órdenes con sus productos
router.get('/orders', OrderController.getOrders);

// Ruta para crear una nueva orden
router.post('/orders', OrderController.createOrder);

module.exports = router;
