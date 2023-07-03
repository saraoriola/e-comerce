const express = require('express');
const router = express.Router();

// Importa el controlador de productos
const ProductController = require('../controllers/ProductController');

// Rutas para productos
router.post('/', ProductController.create);
router.get('/', ProductController.getAll);
router.delete('/:id', ProductController.delete);
router.put('/:id', ProductController.update);

module.exports = router;
