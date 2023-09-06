import express, { Application } from 'express';
import cors from 'cors';

import authController from './auth/auth.controler';
import { User } from './auth/auth.model';

import characterController from "./characters/characters.controler";

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
    }

    midlewares() {
        // Parseo body
        this.app.use(express.json());

        // Cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await User.sync();
            console.info('---------Ready to use---------');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}

export default Server;
