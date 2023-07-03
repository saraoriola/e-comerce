'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // Relación de "Order" a "User" (muchos a uno)
      Order.belongsTo(models.User, { foreignKey: 'user_id' });

      // Relación de "Order" a "Products" (muchos a uno)
      Order.belongsTo(models.Products, { foreignKey: 'product_id' });
    }
  }

  Order.init(
    {
      user_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
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
