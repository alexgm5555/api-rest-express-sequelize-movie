// import { DataTypes } from 'sequelize';
import sequaleze  from '../database';
import { Characters } from '../characters/characters.model';
import { Movies } from '../movies/movies.model';

export const CharactersMovies = sequaleze.define('CharactersMovies', {});

Movies.belongsToMany(Characters, { through: 'CharactersMovies'});
Characters.belongsToMany(Movies, { through: 'CharactersMovies'});