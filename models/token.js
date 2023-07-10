'use strict';
const { Model } = require('sequelize');

// Token model definition
module.exports = (sequelize, DataTypes) => {
  class Token extends Model {
    static associate(models) {
      // Define associations
    }
  }

  Token.init(
    {
      token: DataTypes.STRING,
      UserId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Token',
    }
  );

  return Token;
};
