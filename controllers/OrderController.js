const { Order, Product, User } = require("../models/index.js");

const OrderController = {
  
  // To CREATE an ORDER
  async createOrder(req, res) {
    try {
      // Assign the user ID to the order
      req.body.UserId = req.user.id;

      // Retrieve the products based on the provided product IDs
      const productIds = req.body.ProductId;
      const products = await Product.findAll({
        where: {
          id: productIds,
        },
      });
      // Create the order
      const order = await Order.create(req.body);

      // Associate the products with the order
      await order.addProducts(products);

      // Send the success response with the created order and the list of added product IDs
      res.status(201).send({
        message: "Order created successfully ✅",
        order_created: order,
        products_added: productIds,
      });
    } catch (error) {
      // Error handling if any step fails
      res.status(500).send({ message: "Error creating order", error });
    }
  },

  // To GET ORDERS
  async getOrders(req, res) {
    try {
      // Retrieve all orders
      const orders = await Order.findAll({
        include: [
          {
            model: Product,
            attributes: ["id", "productName", "price"],
            through: { attributes: [] },
          },
        ],
      });

      // Send the orders as the response
      res.status(200).send(orders);
    } catch (error) {
      // Error handling if the retrieval fails
      res.status(500).send({ message: "Failed to retrieve orders", error });
    }
  },
};

module.exports = OrderController;