// sequelize.js
import { Sequelize } from 'sequelize';
import UserModel from './models/user';
import HistoricalUserModel from './models/historicalUser';

const sequelize = new Sequelize(/* connection options */);

const models = {
  User: UserModel(sequelize, Sequelize),
  HistoricalUser: HistoricalUserModel(sequelize, Sequelize),
};

Object.values(models)
  .filter((model) => typeof model.associate === 'function')
  .forEach((model) => model.associate(models));

export default {
  sequelize,
  ...models,
};
