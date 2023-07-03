'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      // Relación de "Review" a "User" (muchos a uno)
      Review.belongsTo(models.User, { foreignKey: 'user_id' });

      // Relación de "Review" a "Products" (muchos a uno)
      Review.belongsTo(models.Products, { foreignKey: 'product_id' });
    }
  }

  Review.init(
    {
      user_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Review',
    }
  );

  return Review;
};
