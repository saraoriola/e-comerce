'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ShoppingCart extends Model {
    static associate(models) {
      // Relationship between "ShoppingCart" and "User" (one-to-one)
      ShoppingCart.belongsTo(models.User, { foreignKey: 'userId' });

      // Relationship between "ShoppingCart" and "Products" (one-to-one)
      ShoppingCart.belongsTo(models.Products, { foreignKey: 'productId' });
    }
  }

  ShoppingCart.init(
    {
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'ShoppingCart',
    }
  );

  return ShoppingCart;
};
