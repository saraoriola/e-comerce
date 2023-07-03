'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // Relationship between "Order" and "User" (many-to-one)
      Order.belongsTo(models.User, { foreignKey: 'user_id' });

      // Relationship between "Order" and "Products" (many-to-one)
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
