const express = require('express');
const router = express.Router();

// Importa el controlador de órdenes
const OrdersController = require('../controllers/OrderController');

// Rutas para órdenes
router.post('/', OrdersController.create);
router.get('/', OrdersController.getAll);
router.delete('/:id', OrdersController.delete);
router.put('/:id', OrdersController.update);

module.exports = router;
