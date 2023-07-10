'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsToMany(models.Product, { through: 'ProductOrder', foreignKey: 'orderId' });
      Order.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }

  Order.init(
    {
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      totalQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );

  return Order;
};
