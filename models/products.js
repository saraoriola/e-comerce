'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate(models) {
      // Relationship between "Products" and "Category" (one-to-many)
      Products.belongsTo(models.Category, { foreignKey: 'categoryId' });

      // Relationship between "Products" and "User" (many-to-many) through the intermediate table "reviews"
      Products.belongsToMany(models.User, { through: models.Review, foreignKey: 'productId' });

      // Relationship between "Products" and "ShoppingCart" (one-to-many)
      Products.hasMany(models.ShoppingCart, { foreignKey: 'productId' });

      // Relationship between "Products" and "Order" (one-to-many)
      Products.hasMany(models.Order, { foreignKey: 'productId' });
    }
  }

  Products.init(
    {
      productName: DataTypes.STRING,
      description: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      price: DataTypes.STRING,
      stock: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Products',
    }
  );

  return Products;
};
