const { Category, Product } = require('../models/index.js');

const CategoriesController = {
  create(req, res) {
    // Create a new category
    Category.create(req.body)
      .then((category) =>
        res.status(201).send({ message: "Category created successfully", category })
      )
      .catch((err) => console.error(err));
  },
  getAll(req, res) {
    // Get all categories with their associated products
    Category.findAll({
      include: [Product],
    })
      .then((categories) => res.send(categories))
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      
      // Delete the category
      await Category.destroy({
        where: {
          id,
        },
      });

      // Delete the products of the category
      await Product.destroy({
        where: {
          categoryId: id,
        },
      });

      res.send("Category has been successfully deleted");
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      
      // Update the category
      await Category.update(req.body, {
        where: {
          id,
        },
      });

      // Get the updated category with its associated products
      const category = await Category.findByPk(id, {
        include: [Product],
      });

      res.send({ message: "Category updated successfully", category });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
};

module.exports = CategoriesController;
