const { Product, Category } = require('../models/index.js');

const ProductController = {

 // To CREATE a PRODUCT
 async createProduct(req, res) {
   try {
     const { productName, description, CategoryId, price, stock } = req.body;
     if (!productName || !description || !CategoryId || !price || !stock) {
       return res.status(400).json({ message: "All fields are required" });
      }
      
      const product = await Product.create(req.body);
      
      res.status(201).json({ message: "Product created successfully", product });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error creating the product" });
    }
  },

  // To UPDATE a PRODUCT
  async updateProduct(req, res) {
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

  // To DELETE a PRODUCT
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

  // To GET PRODUCT with CATEGORY
  async getProducts(req, res) {
    try {
      const products = await Product.findAll({
        include: [Category], 
      });
  
      res.status(200).json({ products });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error retrieving products" });
    }
  },

  // To GET PRODUCT with CATEGORY - ONLY NAMES
  async getOnlyNamesOfProductsAndCategories(req, res) {
    try {
      const products = await Product.findAll({
        include: {
          model: Category,
          attributes: ['categoryName'], 
        },
        attributes: ['productName'],
      });
  
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error retrieving products" });
    }
  },

  // To GET a PRODUCT by ID
async getProductById(req, res) {
  try {
    const { id } = req.params;

    console.log('Executing getProductById:', id);

    const product = await Product.findOne({
      where: { id },
      include: Category,
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving product" });
  }
},

 // To GET a PRODUCT by Name
 async searchProductByName(req, res) {
  try {
    const { productName } = req.query;

    if (!productName) {
      return res.status(400).json({ message: "Product name is required" });
    }

    const products = await Product.findAll({
      where: {
        productName: {
          [Op.like]: `%${productName}%`,
        },
      },
      include: [Category],
    });

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    res.json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error searching for products" });
  }
},

// To GET a PRODUCT by Price
async searchProductByPriceRange(req, res) {
  try {
    const { minPrice, maxPrice } = req.query;

    if (!minPrice || !maxPrice) {
      return res.status(400).json({ message: "Minimum and maximum prices are required" });
    }

    const products = await Product.findAll({
      where: {
        price: {
          [Op.between]: [minPrice, maxPrice],
        },
      },
    });

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found within the specified price range" });
    }

    res.json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error searching for products" });
  }
},

// To GET a PRODUCT by Price Descending
async getProductsByPriceDescending(req, res) {
  try {
    const products = await Product.findAll({
      order: [['price', 'DESC']],
    });

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    res.json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving products" });
  }
},



}

module.exports = ProductController