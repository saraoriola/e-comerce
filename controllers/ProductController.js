const { Product, Category, Review } = require('../models/index.js');

const ProductsController = {
  create(req, res) {
    Product.create(req.body)
      .then((product) =>
        res.status(201).send({ message: "Producto creado con éxito", product })
      )
      .catch((err) => console.error(err));
  },
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
  async delete(req, res) {
    try {
      const { id } = req.params;
      
      // Eliminar el producto
      await Product.destroy({
        where: {
          id,
        },
      });

      // Eliminar las reviews del producto
      await Review.destroy({
        where: {
          productId: id,
        },
      });

      res.send("El producto ha sido eliminado con éxito");
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
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

      res.send({ message: "Producto actualizado con éxito", product });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
};

module.exports = ProductsController;
