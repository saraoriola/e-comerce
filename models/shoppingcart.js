'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ShoppingCart extends Model {
    static associate(models) {
      // Relationship between "ShoppingCart" and "User" (one-to-one)
      ShoppingCart.belongsTo(models.User, { foreignKey: 'user_id' });

      // Relationship between "ShoppingCart" and "Products" (one-to-one)
      ShoppingCart.belongsTo(models.Products, { foreignKey: 'product_id' });
    }
  }

  ShoppingCart.init(
    {
      user_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'ShoppingCart',
    }
  );

  return ShoppingCart;
};
