import { Router } from 'express';
import { validateToken } from '../auth/strategies/validateToken.strategies';
import {
  createMovie,
  findMovie
} from './movies.service';

const router = Router();

router.post('/', validateToken, createMovie);
router.get('/', validateToken, findMovie);
router.patch('/', validateToken, createMovie);
router.delete('/', validateToken, createMovie);

export default router;