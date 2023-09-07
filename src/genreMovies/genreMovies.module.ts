import sequaleze  from '../database';
import { Movies } from '../movies/movies.model';
import { Genre } from '../genre/genre.model';

export const GenreMovies = sequaleze.define('GenreMovies', {});

Movies.belongsToMany(Genre, { through: 'GenreMovies'});
Genre.belongsToMany(Movies, { through: 'GenreMovies'});
