const express = require('express');
const router = express.Router();

// Import the user controller
const UserController = require('../controllers/UserController');

// Routes for users
router.post('/', UserController.create); // Route to create a new user
router.get('/', UserController.getAll); // Route to get all users
router.delete('/:id', UserController.delete); // Route to delete a user by its ID
router.put('/:id', UserController.update); // Route to update a user by its ID

module.exports = router;
