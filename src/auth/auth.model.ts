import { DataTypes } from 'sequelize';
import sequaleze  from '../database';

export const User = sequaleze.define('user', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
});
