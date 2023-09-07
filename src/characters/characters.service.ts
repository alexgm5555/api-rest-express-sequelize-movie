import { Request, Response } from 'express';
import {v4 as uuid} from 'uuid';

import { Characters } from './characters.model';
import { Movies } from '../movies/movies.model';
import { CharactersMovies } from '../charactersMovies/charactersMovies.model';

import { CharacterInterface } from './interfaces';
import { MoviesInterface } from '../movies/interfaces';
import { CharactersMoviesInterface } from '../charactersMovies/interfaces';

export const createCharacter = async (req: Request, res:Response ) => {
  try {
    const { ...CharacterField }: CharacterInterface = req.body;
    const characterExist = await  Characters.findOne({where: {name: CharacterField.name}});
  
    if(characterExist) throw "Character already exist.";
    const characterId = uuid();
    const response = () => Characters.create({
      id: characterId,
      ...CharacterField
    });

    let moviesPrepared: CharactersMoviesInterface[] = []; 
    if(CharacterField.movies && CharacterField.movies.length > 1) {
      for (const movie of CharacterField.movies) {
        const _movie: any = await Movies.findOne({where: {title: movie}});
        if(!_movie) throw `Movie ${movie} related not faund, verify and send request.`;
        moviesPrepared.push({
          movieId: _movie.id,
          characterId
        })
      }
    }
    await response();
    moviesPrepared.forEach(async (movies: any) => {
      return await CharactersMovies.create({
        MovieId: movies.movieId,
        CharacterId: movies.characterId
      });
    });

    console.log(`Character ${CharacterField.name} was Registered`);
    res.json({
      message: `Character ${CharacterField.name} was Registered`
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error
    })
  }
}

export const findCharacter = async (req: Request, res:Response ) => {
  try {
    const { name, age, movies } = req.query;
    const result = 
      name ? findByName(name) :
      age ? findByAge(age) :
      movies ? findByMovie(movies) :
      findAll()
    return res.status(200).json({
      message: await result
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error
    })
  }
}

const findByName = async (name: any ) => {
  const result = await Characters.findOne({where: {name: name}});
  if(!result) throw 'Character not found';
  return result;
}

const findByAge = async (age: any ) => {
  const resultCharacter: any = await Characters.findAll({where: {age}});
  let result: any = [];
  for (const _characters of resultCharacter) {
    const _characterMovieDb: any = await CharactersMovies.findAll({where: {CharacterId: _characters.id}});
    let moviesArray: any[] = [] 
    for (const _movies of _characterMovieDb) {
      const moviesDb:any = await Movies.findOne({where: {id: _movies.MovieId}});
      moviesArray.push(moviesDb.title);
    }
    result.push({ ..._characters?.dataValues, movie: moviesArray})
  }
  console.log(result);
  if(!result) throw 'Character not found';
  return result;
}

const findByMovie = async (movie: any ) => {
  const resultMovie: any = await Movies.findOne({where: {id: movie}});
  const resultCharacterMovie: any = await CharactersMovies.findAll({where: {MovieId: resultMovie.id}});
  // const resultCharacterMovie: any = await CharactersMovies.findAll({where: {MovieId: movie}});
  let objCharacters: any[] = []; 
  for (const _characterMovie of resultCharacterMovie) {
    const _characterDb = await Characters.findOne({where: {id: _characterMovie.CharacterId}});
    objCharacters.push({ ..._characterDb?.dataValues, movie: [movie] })
  }
  if(!objCharacters) throw 'Character not found';
  
  return objCharacters;
}

const findAll = async ( ) => {
  const result = await Characters.findAll();
  if(!result) throw 'Character table is empty';
  return result;
}

export const updateCharacter = async (req: Request, res:Response ) => {
  try {
    return res.status(200).json({
      message: 'Update Register'
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error
    })
  }
}

export const deleteCharacter = async (req: Request, res:Response ) => {
  try {
    const { name } = req.query;
    await Characters.destroy({where: {name}});
    return res.status(200).json({
      message: 'Character Deleted'
    })

  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error
    })
  }
}
