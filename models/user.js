'use strict';
const { Model } = require('sequelize');

// User model definition
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Define associations
      User.hasMany(models.Order, { foreignKey: 'userId' });
    }
  }

  User.init(
    {
      name: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      address: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  return User;
};
