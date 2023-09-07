import { Router } from 'express';
import { validateToken } from '../auth/strategies/validateToken.strategies';
import { createMovie } from './movies.service';

const router = Router();

router.post('/', validateToken, createMovie);

export default router;