const { Category, Product } = require('../models/index.js');
const { Op } = require('sequelize');


const CategoriesController = {
  // To CREATE a CATEGORY 
  async create(req, res) {
    try {
      const category = await Category.create(req.body);
      res.status(201).send({ message: "Category created successfully", category });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Error creating category" });
    }
  },
  
  // To UPDATE a CATEGORY 
  async update(req, res) {
    try {
      const { id } = req.params;
      await Category.update(req.body, {
        where: {
          id,
        },
      });
 
      const category = await Category.findByPk(id, {
        include: [Product],
      });
 
      res.send({ message: "Category updated successfully", category });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Error updating category" });
    }
  },
 
  // To DELETE a CATEGORY
  async delete(req, res) {
    try {
      const { id } = req.params;
      await Category.destroy({
        where: {
          id,
        },
      });
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
 
  // To GET ALL with PRODUCT
  async getAll(req, res) {
    try {
      const categories = await Category.findAll({
        include: [Product],
      });
      res.send(categories);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },

  // To GET a CATEGORY by ID
  async getById(req, res) {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id, {
        include: [Product],
      });

      if (!category) {
        return res.status(404).send({ message: "Category not found" });
      }

      res.send(category);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },

  // To GET a CATEGORY by Name
  async getByName(req, res) {
    try {
      const { name } = req.query;
      const categories = await Category.findAll({
        where: {
          categoryName: {
            [Op.like]: `%${name}%`,
          },
        },
        include: [Product],
      });
  
      res.send(categories);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }

};

module.exports = CategoriesController;

