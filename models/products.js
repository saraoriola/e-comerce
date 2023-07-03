'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate(models) {
      // Relationship between "Products" and "Category" (one-to-many)
      Products.belongsTo(models.Category, { foreignKey: 'category_id' });

      // Relationship between "Products" and "User" (many-to-many) through the intermediate table "reviews"
      Products.belongsToMany(models.User, { through: models.Review, foreignKey: 'product_id' });

      // Relationship between "Products" and "ShoppingCart" (one-to-many)
      Products.hasMany(models.ShoppingCart, { foreignKey: 'product_id' });

      // Relationship between "Products" and "Order" (one-to-many)
      Products.hasMany(models.Order, { foreignKey: 'product_id' });
    }
  }

  Products.init(
    {
      product_name: DataTypes.STRING,
      description: DataTypes.STRING,
      category_id: DataTypes.INTEGER,
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
