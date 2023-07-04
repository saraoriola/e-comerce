'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      // Relationship between "Review" and "User" (many-to-one)
      Review.belongsTo(models.User, { foreignKey: 'userId' });

      // Relationship between "Review" and "Products" (many-to-one)
      Review.belongsTo(models.Products, { foreignKey: 'productId' });
    }
  }

  Review.init(
    {
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Review',
    }
  );

  return Review;
};
