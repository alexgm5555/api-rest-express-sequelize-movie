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
import { createPool } from 'mysql2/promise';

config()
const app = express();
const port  =  process.env.DB_PORT;

const poll = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: 3306
});


app.listen(port, () => {
    console.log(`run service1 POR ${port}`);
});

app.use(express.json());

// connetBD();

app.use('/api', require('./routes/app.routes'));