const express = require('express');
const router = express.Router();

// Importa el controlador de carritos de compras
const ShoppingCartController = require('../controllers/ShoppingcartController');

// Rutas para carritos de compras
router.post('/', ShoppingCartController.create);
router.get('/', ShoppingCartController.getAll);
router.delete('/:id', ShoppingCartController.delete);
router.put('/:id', ShoppingCartController.update);

module.exports = router;
