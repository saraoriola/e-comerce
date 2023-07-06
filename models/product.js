'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // Relationship between "Product" and "Category" (one-to-many)
      Product.belongsTo(models.Category);

      // Relationship between "Product" and "Order" (many-to-many)

      
      // mirar clase del martes para la relacion es muchos a muchos
      // Product.
    }
  }

  Product.init(
    {
      productName: DataTypes.STRING,
      description: DataTypes.STRING,
      CategoryId: DataTypes.INTEGER,
      price: DataTypes.STRING,
      stock: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );

  return Product;
};


