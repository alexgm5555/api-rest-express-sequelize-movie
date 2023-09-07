import { Request, Response } from 'express';
import {v4 as uuid} from 'uuid';

import { initialData } from './data/seed-data';
import { Characters } from '../characters/characters.model';
import { User } from '../auth/auth.model';
import { Movies } from '../movies/movies.model';

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
    return await Characters.create({
      id: uuid(),
      ...character
    });
  });
}

const iMovies = async () => {
  const seedMovies = initialData.movies;
  await Movies.destroy({where: {}});
  seedMovies.forEach(async (movies: any) => {
    return await Movies.create({
      id: uuid(),
      ...movies
    });
  });
}

export const insertAllData = async (req: Request, res:Response ) => {
  try {
    await insertUsers();
    await iCharacters();
    return res.status(400).json({
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
    return res.status(400).json({
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
    return res.status(400).json({
      message: 'Created Movies'
    })
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error
    })
  }
}