const express = require('express');
const router = express.Router();
const {authMiddleware, isAdmin} = require('../middleware/authMiddleware');

// Import the category controller
const CategoryController = require('../controllers/CategoryController');

// Routes for categories
// CREATE
router.post('/', CategoryController.create); // Route to create a new category - TEST OK

// READ
router.get('/', CategoryController.getAll); // Route to get all categories - TEST OK
router.get('/id/:id', CategoryController.getById); // Route to get a category by its ID - TEST OK
router.get('/search', CategoryController.getByName); // Route to get categories by name - TEST OK

// UPDATE
router.put('/id/:id', CategoryController.update); // Route to update a category by its ID - TEST OK

// DELETE
router.delete('/id/:id', CategoryController.delete); // Route to delete a category by its ID - TEST OK

module.exports = router;
