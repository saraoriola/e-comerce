const { Order, User, Product } = require('../models/index.js');

const OrdersController = {
  create(req, res) {
    Order.create(req.body)
      .then((order) =>
        res.status(201).send({ message: "Orden creada con éxito", order })
      )
      .catch((err) => console.error(err));
  },
  getAll(req, res) {
    Order.findAll({
      include: [User, Product],
    })
      .then((orders) => res.send(orders))
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      
      await Order.destroy({
        where: {
          id,
        },
      });

      res.send("La orden ha sido eliminada con éxito");
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      
      await Order.update(req.body, {
        where: {
          id,
        },
      });

      const order = await Order.findByPk(id, {
        include: [User, Product],
      });

      res.send({ message: "Orden actualizada con éxito", order });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
};

module.exports = OrdersController;
