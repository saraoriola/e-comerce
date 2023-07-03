const express = require('express');
const router = express.Router();

// Importa el controlador de usuarios
const UserController = require('../controllers/UserController');

// Rutas para usuarios
router.post('/', UserController.create);
router.get('/', UserController.getAll);
router.delete('/:id', UserController.delete);
router.put('/:id', UserController.update);

module.exports = router;
