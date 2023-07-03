'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Relación de "User" a "Products" (muchos a muchos) a través de la tabla intermedia "reviews"
      User.belongsToMany(models.Products, { through: models.Review, foreignKey: 'user_id' });

      // Relación de "User" a "ShoppingCart" (uno a muchos)
      User.hasMany(models.ShoppingCart, { foreignKey: 'user_id' });

      // Relación de "User" a "Order" (uno a muchos)
      User.hasMany(models.Order, { foreignKey: 'user_id' });
    }
  }

  User.init(
    {
      name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      address: DataTypes.STRING,
      role: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  return User;
};
