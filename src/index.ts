// app:
// build: .
// depends_on:
//   - db
// links:
//   - db
// ports:
//   - 3000:3000

import express from 'express';
// import {connetBD} from './database';
import { config } from 'dotenv';
import Server from './server';
config()

const server = new Server();
