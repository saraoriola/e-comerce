const express = require('express');
const router = express.Router();

// Importa el controlador de categorías
const CategoryController = require('../controllers/CategoryController');

// Rutas para categorías
router.post('/', CategoryController.create);
router.get('/', CategoryController.getAll);
router.delete('/:id', CategoryController.delete);
router.put('/:id', CategoryController.update);

module.exports = router;
