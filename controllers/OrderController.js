const { Order, User, Product } = require('../models/index.js');

const OrdersController = {
  // Create a new order
  create(req, res) {
    Order.create(req.body)
      .then((order) =>
        res.status(201).send({ message: "Order created successfully", order })
      )
      .catch((err) => console.error(err));
  },
  // Get all orders with associated User and Product data
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
  // Delete an order
  async delete(req, res) {
    try {
      const { id } = req.params;
      
      await Order.destroy({
        where: {
          id,
        },
      });

      res.send("Order has been successfully deleted");
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  // Update an order
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

      res.send({ message: "Order updated successfully", order });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
};

module.exports = OrdersController;
