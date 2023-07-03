const { ShoppingCart, User, Product } = require('../models/index.js');

const ShoppingCartController = {
  // Create a new shopping cart
  create(req, res) {
    ShoppingCart.create(req.body)
      .then((shoppingCart) =>
        res.status(201).send({ message: "Shopping cart created successfully", shoppingCart })
      )
      .catch((err) => console.error(err));
  },
  // Get all shopping carts with associated User and Product data
  getAll(req, res) {
    ShoppingCart.findAll({
      include: [User, Product],
    })
      .then((shoppingCarts) => res.send(shoppingCarts))
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
  },
  // Delete a shopping cart
  async delete(req, res) {
    try {
      const { id } = req.params;
      
      await ShoppingCart.destroy({
        where: {
          id,
        },
      });

      res.send("Shopping cart has been successfully deleted");
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  // Update a shopping cart
  async update(req, res) {
    try {
      const { id } = req.params;
      
      await ShoppingCart.update(req.body, {
        where: {
          id,
        },
      });

      const shoppingCart = await ShoppingCart.findByPk(id, {
        include: [User, Product],
      });

      res.send({ message: "Shopping cart updated successfully", shoppingCart });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
};

module.exports = ShoppingCartController;
