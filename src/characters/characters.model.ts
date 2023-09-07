import { DataTypes } from 'sequelize';
import sequaleze  from '../database';

export const Characters = sequaleze.define('Characters', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.STRING,
    allowNull: false
  },
  widh: {
    type: DataTypes.STRING,
    allowNull: false
  },
  history: {
    type: DataTypes.STRING,
    allowNull: false
  },
});