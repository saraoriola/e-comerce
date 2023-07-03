'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ShoppingCart extends Model {
    static associate(models) {
      // Relación de "ShoppingCart" a "User" (uno a uno)
      ShoppingCart.belongsTo(models.User, { foreignKey: 'user_id' });

      // Relación de "ShoppingCart" a "Products" (uno a uno)
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
