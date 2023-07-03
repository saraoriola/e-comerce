const express = require('express');
const router = express.Router();

// Import the review controller
const ReviewsController = require('../controllers/ReviewController');

// Routes for reviews
router.post('/', ReviewsController.create); // Route to create a new review
router.get('/', ReviewsController.getAll); // Route to get all reviews
router.delete('/:id', ReviewsController.delete); // Route to delete a review by its ID
router.put('/:id', ReviewsController.update); // Route to update a review by its ID

module.exports = router;
