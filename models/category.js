'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      // Relationship between "Category" and "Products" (one-to-many)
      Category.hasMany(models.Products, { foreignKey: 'categoryId' });
    }
  }

  Category.init(
    {
      categoryName: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Category',
    }
  );

  return Category;
};
