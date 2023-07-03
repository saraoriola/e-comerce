const express = require('express');
const router = express.Router();

// Import the category controller
const CategoryController = require('../controllers/CategoryController');

// Routes for categories
router.post('/', CategoryController.create); // Route to create a new category
router.get('/', CategoryController.getAll); // Route to get all categories
router.delete('/:id', CategoryController.delete); // Route to delete a category by its ID
router.put('/:id', CategoryController.update); // Route to update a category by its ID

module.exports = router;
