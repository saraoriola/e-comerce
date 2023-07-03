const { Review, User, Product } = require('../models/index.js');

const ReviewsController = {
  create(req, res) {
    Review.create(req.body)
      .then((review) =>
        res.status(201).send({ message: "Reseña creada con éxito", review })
      )
      .catch((err) => console.error(err));
  },
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
  async delete(req, res) {
    try {
      const { id } = req.params;
      
      await Review.destroy({
        where: {
          id,
        },
      });

      res.send("La reseña ha sido eliminada con éxito");
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
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

      res.send({ message: "Reseña actualizada con éxito", review });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
};

module.exports = ReviewsController;
