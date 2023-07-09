'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductOrder extends Model {
    static associate(models) {
      // No se necesita una asociación directa en este modelo
    }
  }

  ProductOrder.init(
    {
      productId:DataTypes.INTEGER,
      orderId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'ProductOrder',
    }
  );

  return ProductOrder;
};
