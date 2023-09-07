import express, { Application } from 'express';
import cors from 'cors';

import authController from './auth/auth.controler';
import characterController from './characters/characters.controler';
import MoviesController from './movies/movies.controler';
import SeedController from './seed/seed.controller';

import { User as UserModel } from './auth/auth.model';
import { Characters as CharacterModel } from './characters/characters.model';
import { Movies as MoviesModel } from './movies/movies.model';
import { CharactersMovies as CharactersMoviesModel } from './charactersMovies/charactersMovies.model';
import { Genre as GenreModel } from './genre/genre.model';
import { GenreMovies as GenreMoviesModel } from './genreMovies/genreMovies.module';



class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo en el puerto ' + this.port);
        })
    }

    routes() {
        this.app.use('/api/auth', authController);
        this.app.use('/api/characters', characterController);
        this.app.use('/api/movies', MoviesController);
        this.app.use('/api/seed', SeedController);
    }

    midlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await UserModel.sync();
            await CharacterModel.sync();
            await MoviesModel.sync();
            await CharactersMoviesModel.sync();
            await GenreModel.sync();
            await GenreMoviesModel.sync();
            console.info('---------Ready to use---------');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}

export default Server;
