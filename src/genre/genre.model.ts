// import { DataTypes } from 'sequelize';
import { DataTypes } from 'sequelize';
import sequaleze  from '../database';
import { Movies } from '../movies/movies.model';

export const Genre = sequaleze.define('Genre', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});
