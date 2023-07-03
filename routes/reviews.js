const express = require('express');
const router = express.Router();

// Importa el controlador de reseñas
const ReviewsController = require('../controllers/ReviewController');

// Rutas para reseñas
router.post('/', ReviewsController.create);
router.get('/', ReviewsController.getAll);
router.delete('/:id', ReviewsController.delete);
router.put('/:id', ReviewsController.update);

module.exports = router;
