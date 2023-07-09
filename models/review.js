'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.User, { foreignKey: 'userId' });
      Review.belongsTo(models.Product, { foreignKey: 'productId' });
    }
  }

  Review.init(
    {
      reviewId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Review',
    }
  );

  return Review;
};
