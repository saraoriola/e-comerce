'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Relationship between "User" and "ShoppingCart" (one-to-many)//esta nos da igual por ahora
      User.hasMany(models.ShoppingCart, { foreignKey: 'userId' });

      // Relationship between "User" and "Order" (one-to-many)
      User.hasMany(models.Order);

      //en el futuro si haces el resto te falta la de reviews
    }
  }

  User.init(
    {
      name: DataTypes.STRING,
      lastName: DataTypes.STRING,
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
