'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // Relationship between "Order" and "User" (many-to-one)
      Order.belongsTo(models.User, { foreignKey: 'userId' });

      // Relationship between "Order" and "Products" (many-to-one)
      Order.belongsTo(models.Products, { foreignKey: 'productId' });
    }
  }

  Order.init(
    {
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      shipping_address: DataTypes.STRING,
      total_price: DataTypes.STRING,
      total_quantity: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );

  return Order;
};
