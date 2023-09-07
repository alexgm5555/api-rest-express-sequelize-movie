import { DataTypes } from 'sequelize';
import sequaleze  from '../database';

export const Movies = sequaleze.define('Movies', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dateToCreated: {
    type: DataTypes.STRING,
    allowNull: false
  },
  starts: {
    type: DataTypes.DOUBLE || 0,
    allowNull: false
  }
});
