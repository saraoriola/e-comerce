'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // Relación Many-to-One con la tabla "Category"
      Product.belongsTo(models.Category, { foreignKey: 'categoryId' });

      // Relación Many-to-Many con la tabla "Order" a través de la tabla intermedia "ProductOrder"
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
