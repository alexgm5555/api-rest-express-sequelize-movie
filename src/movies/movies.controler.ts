import { Router } from 'express';
import { validateToken } from '../auth/strategies/validateToken.strategies';
import {
  createMovie,
  findMovie,
  updateMovie,
  deleteMovies
} from './movies.service';

const router = Router();

router.post('/', validateToken, createMovie);
router.get('/', validateToken, findMovie);
router.patch('/', validateToken, updateMovie);
router.delete('/', validateToken, deleteMovies);

export default router;