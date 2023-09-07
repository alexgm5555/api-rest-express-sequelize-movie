import { Request, Response } from 'express';
import {v4 as uuid} from 'uuid';

import { Movies } from './movies.model';
import { Characters } from '../characters/characters.model';
import { Genre } from '../genre/genre.model';
import { CharactersMovies } from '../charactersMovies/charactersMovies.model';
import { GenreMovies } from '../genreMovies/genreMovies.module';

import { MoviesInterface } from './interfaces';
import { CharactersMoviesInterface } from '../charactersMovies/interfaces';
import { GenreMoviesInterface } from '../genreMovies/interfaces/genreMovies.interface';


export const createMovie = async (req: Request, res:Response ) => {
  try {
    const { ...movieReq }: MoviesInterface = req.body;
    const movieExist = await  Movies.findOne({where: {title: movieReq.title}});
    
    if (movieExist) throw "Movie already exist.";
    const movieId = uuid();

    const response = () => Movies.create({
      id: movieId,
      ...movieReq
    });

    let charactersPrepared: CharactersMoviesInterface[] = []; 
    if(movieReq.characters && movieReq.characters.length > 1) {
      for (const character of movieReq.characters) {
        const _character: any = await Characters.findOne({where: {name: character}});
        if(!_character) throw `Character ${character} related not faund, verify and send request again.`;
        charactersPrepared.push({
          movieId: movieId,
          characterId: _character.id
        })
      }
    }

    let genrePrepared: GenreMoviesInterface[] = []; 
    if(movieReq.genre && movieReq.genre.length > 1) {
      for (const genre of movieReq.genre) {
        const _genre: any = await Genre.findOne({where: {name: genre}});
        if(!_genre) throw `Genre ${genre} related not faund, verify and send request again.`;
        genrePrepared.push({
          movieId: movieId,
          genreId: _genre.id
        })
      }
    }

    await response();
    charactersPrepared.forEach(async (movies: any) => {
      return await CharactersMovies.create({
        MovieId: movies.movieId,
        CharacterId: movies.characterId
      });
    });

    genrePrepared.forEach(async (movies: any) => {
      return await GenreMovies.create({
        MovieId: movies.movieId,
        GenreId: movies.genreId
      });
    });

    return res.status(200).json({
      message: 'Movie was created'
    });
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      message: error
    })
  }
}

export const findMovie = async (req: Request, res:Response ) => {
  try {
    const { name, genre, order } = req.query;
    const result = 
      name ? findByName(name) :
      genre ? findByGenre(genre) :
      order ? findByOrder(order) :
      findAll()
    return res.status(200).json({
      message: await result
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: error
    })
  }
}

const findByName = async (name: any ) => {
  const result = await Movies.findOne({where: {title: name}});
  if(!result) throw 'Movie not found';
  return result;
}

const findByGenre = async (genre: any ) => {
  const resultGender: any = await Genre.findOne({where: {name: genre}});
  const resultGenderMovie: any = await GenreMovies.findAll({where: {GenreId: resultGender.id}});
  // const resultCharacterMovie: any = await CharactersMovies.findAll({where: {MovieId: movie}});
  let objMovies: any[] = [];
  for (const _genderMovie of resultGenderMovie) {
    const _genderDb = await Movies.findOne({where: {id: _genderMovie.MovieId}});
    objMovies.push({ ..._genderDb?.dataValues, genre: [genre] })
  }
  if(!objMovies) throw 'Character not found';
  
  return objMovies;
}

const findByOrder = async (_order: any ) => {
  if (_order !== 'ASC' && _order !== 'DESC') throw 'Text order Not Defined'
  const result = await Movies.findAll({order: ['title'] });
  return result
}

const findAll = async ( ) => {
  const result = await Movies.findAll();
  if(!result) throw 'Movies table is empty';
  return result;
}


export const updateMovie = async (req: Request, res:Response ) => {
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

export const deleteMovies = async (req: Request, res:Response ) => {
  try {
    const { name } = req.query;
    await Movies.destroy({where: {name}});
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
