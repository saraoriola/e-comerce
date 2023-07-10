'use strict';
const { Model } = require('sequelize');

// Order model definition
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // Many-to-Many relationship with the "Product" table through the intermediate table "ProductOrder"
      Order.belongsToMany(models.Product, { through: 'ProductOrder', foreignKey: 'orderId' });
      
      // Many-to-One relationship with the "User" table
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
