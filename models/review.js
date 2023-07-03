'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      // Relationship between "Review" and "User" (many-to-one)
      Review.belongsTo(models.User, { foreignKey: 'user_id' });

      // Relationship between "Review" and "Products" (many-to-one)
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
