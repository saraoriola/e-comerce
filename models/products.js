'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate(models) {
      // Relación de "Products" a "Category" (uno a muchos)
      Products.belongsTo(models.Category, { foreignKey: 'category_id' });

      // Relación de "Products" a "User" (muchos a muchos) a través de la tabla intermedia "reviews"
      Products.belongsToMany(models.User, { through: models.Review, foreignKey: 'product_id' });

      // Relación de "Products" a "ShoppingCart" (uno a muchos)
      Products.hasMany(models.ShoppingCart, { foreignKey: 'product_id' });

      // Relación de "Products" a "Order" (uno a muchos)
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
