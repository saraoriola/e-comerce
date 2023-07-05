'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // Relationship between "Order" and "User" (many-to-one)
      Order.belongsTo(models.User);

      // Relationship between "Product" and "Order" (many-to-many)
      // mirar clase del martes para la relacion es muchos a muchos
      // Order.
    }
  }

  Order.init(
    {
      UserId: DataTypes.INTEGER,
      ProductId: DataTypes.INTEGER,
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
