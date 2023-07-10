const express = require('express');
const router = express.Router();

// Importar el controlador de usuarios
const UserController = require('../controllers/UserController');
const {authMiddleware} = require('../middleware/authMiddleware');

// Rutas para usuarios
// CREATE
router.post('/users', UserController.registerUser); // Ruta para crear un nuevo usuario
router.post('/login', UserController.loginUser); // Ruta para iniciar sesión

//READ
router.get('/profile', authMiddleware, UserController.getUserProfile); // PENDIENTE

//DELETE
router.delete('/logout',authMiddleware,UserController.logout)

module.exports = router;
