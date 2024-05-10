// models/user.js
'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class User extends Model {
    static associate() {
      // Define associations if any
    }
  }

  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'User', // Make sure this matches your actual table name
      timestamps: true, // Include timestamps if needed
    },
  );

  return User;
};
