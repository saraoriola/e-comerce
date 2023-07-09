'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsToMany(models.Product, {through: models.ProductOrder, foreignKey: 'orderId',});
      Order.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }

  Order.init(
    {
      shippingAddress: DataTypes.STRING,
      totalPrice: DataTypes.FLOAT,
      totalQuantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );

  return Order;
};
