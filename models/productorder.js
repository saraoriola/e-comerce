'use strict';
const { Model } = require('sequelize');

// ProductOrder model definition
module.exports = (sequelize, DataTypes) => {
  class ProductOrder extends Model {
    static associate(models) {
      // No direct association is needed in this model
    }
  }

  ProductOrder.init(
    {
      productId: DataTypes.INTEGER,
      orderId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'ProductOrder',
    }
  );

  return ProductOrder;
};
