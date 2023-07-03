const { Review, User, Product } = require('../models/index.js');

const ReviewsController = {
  // Create a new review
  create(req, res) {
    Review.create(req.body)
      .then((review) =>
        res.status(201).send({ message: "Review created successfully", review })
      )
      .catch((err) => console.error(err));
  },
  // Get all reviews with associated User and Product data
  getAll(req, res) {
    Review.findAll({
      include: [User, Product],
    })
      .then((reviews) => res.send(reviews))
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
  },
  // Delete a review
  async delete(req, res) {
    try {
      const { id } = req.params;
      
      await Review.destroy({
        where: {
          id,
        },
      });

      res.send("Review has been successfully deleted");
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  // Update a review
  async update(req, res) {
    try {
      const { id } = req.params;
      
      await Review.update(req.body, {
        where: {
          id,
        },
      });

      const review = await Review.findByPk(id, {
        include: [User, Product],
      });

      res.send({ message: "Review updated successfully", review });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
};

module.exports = ReviewsController;
