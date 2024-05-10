// models/historicalUser.js
'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class HistoricalUser extends Model {
    static associate() {
      // Define associations if any
    }
  }

  HistoricalUser.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'HistoricalUser',
      tableName: 'HistoricalUser', // Make sure this matches your actual table name
      timestamps: true, // Include timestamps if needed
    },
  );

  return HistoricalUser;
};
