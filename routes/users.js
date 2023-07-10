const express = require('express');
const router = express.Router();

// Import the user controller
const UserController = require('../controllers/UserController');
const { authMiddleware, isAdmin } = require('../middleware/authMiddleware');

// Routes for users
// CREATE
router.post('/users', UserController.registerUser); // Route to create a new user
router.post('/login', UserController.loginUser); // Route to log in

// READ
router.get('/profile', authMiddleware, UserController.getUserProfile); // PENDING

// DELETE
router.delete('/logout', authMiddleware, UserController.logout); // Route to log out

module.exports = router;
