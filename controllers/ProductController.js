const { Product, Category, Review } = require('../models/index.js');

const ProductsController = {
  // Create a new product
  createProduct: async (req, res) => {
    try {
      const { productName, description, categoryId, price, stock } = req.body;
      if (!productName || !description || !categoryId || !price || !stock) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      const product = await Product.create({
        productName,
        description,
        categoryId,
        price,
        stock,
      });
  
      res.status(201).json({ message: "Product created successfully", product });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error creating the product" });
    }
  },

  // Get all products with associated Category and Review data
  getAll: (req, res) => {
    Product.findAll({
      include: [Category, Review],
    })
      .then((products) => res.send(products))
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
  },

  // Get a product by its ID
  getProductById: (req, res) => {
    const { id } = req.params;
    Product.findByPk(id, { include: [Category, Review] })
      .then((product) => {
        if (!product) {
          return res.status(404).json({ message: "Product not found" });
        }
        res.send(product);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
  },

  // Update a product
  updateProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const { productName, description, categoryId, price, stock } = req.body;
      if (!productName || !description || !categoryId || !price || !stock) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const product = await Product.findOne({ where: { id } });
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      await Product.update(
        {
          productName,
          description,
          categoryId,
          price,
          stock,
        },
        { where: { id } }
      );

      res.json({ message: "Product updated successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error updating the product" });
    }
  },

  // Delete a product and its reviews
  deleteProduct: async (req, res) => {
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

      res.send("Product deleted successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },

  // Filter products by name
  filterProductsByName: (req, res) => {
    const { name } = req.query;
    Product.findAll({
      where: {
        productName: {
          [Op.like]: `%${name}%`,
        },
      },
      include: [Category, Review],
    })
      .then((products) => res.send(products))
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
  },

  // Filter products by price
  filterProductsByPrice: (req, res) => {
    const { min, max } = req.query;
    Product.findAll({
      where: {
        price: {
          [Op.between]: [min, max],
        },
      },
      include: [Category, Review],
    })
      .then((products) => res.send(products))
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
  },

  // Sort products by price (descending)
  sortProductsByPrice: (req, res) => {
    Product.findAll({
      include: [Category, Review],
      order: [["price", "DESC"]],
    })
      .then((products) => res.send(products))
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
  },
};

module.exports = ProductsController;
