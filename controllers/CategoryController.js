const { Category, Product } = require('../models/index.js');

const CategoriesController = {
  create(req, res) {
    Category.create(req.body)
      .then((category) =>
        res.status(201).send({ message: "Categoría creada con éxito", category })
      )
      .catch((err) => console.error(err));
  },
  getAll(req, res) {
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
      
      // Eliminar la categoría
      await Category.destroy({
        where: {
          id,
        },
      });

      // Eliminar los productos de la categoría
      await Product.destroy({
        where: {
          categoryId: id,
        },
      });

      res.send("La categoría ha sido eliminada con éxito");
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
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

      res.send({ message: "Categoría actualizada con éxito", category });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
};

module.exports = CategoriesController;
