import { Request, Response } from 'express';
import {v4 as uuid} from 'uuid';

import { initialData } from './data/seed-data';
import { Characters } from '../characters/characters.model';
import { User } from '../auth/auth.model';
import { Movies } from '../movies/movies.model';
import { Genre } from '../genre/genre.model';

const insertUsers = async () => {
  const seedUsers = initialData.users;
  await User.destroy({where: {}});
  seedUsers.forEach(async (user: any) => {
    return await User.create(user);
  });
}

const iCharacters = async () => {
  const seedCharacters = initialData.characters;
  await Characters.destroy({where: {}});
  seedCharacters.forEach(async (character: any) => {
    return await Characters.create(character);
  });
}

const iMovies = async () => {
  const seedMovies = initialData.movies;
  await Movies.destroy({where: {}});
  seedMovies.forEach(async (movies: any) => {
    return await Movies.create(movies);
  });
}

const iGenre = async () => {
  const seedMovies = initialData.genres;
  await Genre.destroy({where: {}});
  seedMovies.forEach(async (genre: any) => {
    return await Genre.create(genre);
  });
}

export const insertAllData = async (req: Request, res:Response ) => {
  try {
    await insertUsers();
    await iMovies();
    await iCharacters();
    await iGenre();
    return res.status(200).json({
      message: 'created Data'
    })
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error
    })
  }
}

export const insertCharacters = async (req: Request, res:Response ) => {
  try {
    await iCharacters();
    return res.status(200).json({
      message: 'Created Characters'
    })
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error
    })
  }
}

export const insertMovies = async (req: Request, res:Response ) => {
  try {
    await iMovies();
    return res.status(200).json({
      message: 'Created Movies'
    })
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error
    })
  }
}

export const insertGenre = async (req: Request, res:Response ) => {
  try {
    await iGenre();
    return res.status(200).json({
      message: 'Created Genre'
    })
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error
    })
  }
}