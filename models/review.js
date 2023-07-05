'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      // Relationship between "Review" and "User" (many-to-one)
      Review.belongsTo(models.User);

      // Relationship between "Review" and "Products" (many-to-one)
      Review.belongsTo(models.Product);
    }
  }

  Review.init(
    {
      UserId: DataTypes.INTEGER,
      ProductId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Review',
    }
  );

  return Review;
};
