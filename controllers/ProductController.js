const { Product, Category } = require('../models/index.js');

const ProductController = {

 // Create Product
 async createProduct(req, res) {
    try {
      const { productName, description, CategoryId, price, stock } = req.body;
      if (!productName || !description || !CategoryId || !price || !stock) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const product = await Product.create({
        productName,
        description,
        CategoryId,
        price,
        stock,
      });

      res.status(201).json({ message: "Product created successfully", product });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error creating the product" });
    }
  },

  // GET PRODUCT BY ID
  getProductById (req, res) {
    Product.findByPk(req.params.id, { include: [Category] })
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

  // GET PRODUCT BY ID WITH CAT
  getAll(req, res) {
    Product.findAll({
      include: [Category],
    })
      .then((products) => res.send(products))
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
  },

  // UPDATE 
  async updateProduct (req, res) {
    try {
      const { id } = req.params;
      const { productName, description, CategoryId, price, stock } = req.body;
      if (!productName || !description || !CategoryId || !price || !stock) {
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
          CategoryId,
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

  // DELETE
   async deleteProduct (req, res) {
      try {
        const { id } = req.params;
      await Product.destroy (
      
        { where: { id } }
      );
        
        res.send("Product deleted successfully");
      } catch (error) {
        console.error(error);
        res.status(500).send(error);
      }
    },

    // FILTER
    
}


module.exports = ProductController