'use strict';
const { Model } = require('sequelize');

// Product model definition
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // Many-to-One relationship with the "Category" table
      Product.belongsTo(models.Category, { foreignKey: 'categoryId' });

      // Many-to-Many relationship with the "Order" table through the intermediate table "ProductOrder"
      Product.belongsToMany(models.Order, {
        through: models.ProductOrder,
        foreignKey: 'productId',
      });
    }
  }

  Product.init(
    {
      productName: DataTypes.STRING,
      description: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
      stock: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );

  return Product;
};
