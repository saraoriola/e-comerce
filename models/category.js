'use strict';

const { Model } = require('sequelize');

// Definition of the Category model
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      // Category has a one-to-many association with Product model using foreign key 'categoryId'
      Category.hasMany(models.Product, { foreignKey: 'categoryId' }); 
    }
  }

  // Initialization of the Category model
  Category.init(
    {
      categoryName: DataTypes.STRING, // Attribute: categoryName of type string
      description: DataTypes.STRING, // Attribute: description of type string
    },
    {
      sequelize,
      modelName: 'Category', // Model name is set to 'Category'
    }
  );

  return Category;
};
