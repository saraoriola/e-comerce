'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      // Relación de "Category" a "Products" (uno a muchos)
      Category.hasMany(models.Products, { foreignKey: 'category_id' });
    }
  }

  Category.init(
    {
      category_name: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Category',
    }
  );

  return Category;
};
