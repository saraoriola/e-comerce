const { Product, Category, Review } = require('../models/index.js');

const ProductsController = {
  // Create a new product
  create(req, res) {
    Product.create(req.body)
      .then((product) =>
        res.status(201).send({ message: "Product created successfully", product })
      )
      .catch((err) => console.error(err));
  },
  // Get all products with associated Category and Review data
  getAll(req, res) {
    Product.findAll({
      include: [Category, Review],
    })
      .then((products) => res.send(products))
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
  },
  // Delete a product and its reviews
  async delete(req, res) {
    try {
      const { id } = req.params;
      
      // Delete the product
      await Product.destroy({
        where: {
          id,
        },
      });

      // Delete the reviews of the product
      await Review.destroy({
        where: {
          productId: id,
        },
      });

      res.send("Product has been successfully deleted");
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  // Update a product
  async update(req, res) {
    try {
      const { id } = req.params;
      
      await Product.update(req.body, {
        where: {
          id,
        },
      });

      const product = await Product.findByPk(id, {
        include: [Category, Review],
      });

      res.send({ message: "Product updated successfully", product });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
};

module.exports = ProductsController;
