const { ShoppingCart, User, Product } = require('../models/index.js');

const ShoppingCartController = {
  create(req, res) {
    ShoppingCart.create(req.body)
      .then((shoppingCart) =>
        res.status(201).send({ message: "Carrito de compras creado con éxito", shoppingCart })
      )
      .catch((err) => console.error(err));
  },
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
  async delete(req, res) {
    try {
      const { id } = req.params;
      
      await ShoppingCart.destroy({
        where: {
          id,
        },
      });

      res.send("El carrito de compras ha sido eliminado con éxito");
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
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

      res.send({ message: "Carrito de compras actualizado con éxito", shoppingCart });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
};

module.exports = ShoppingCartController;
