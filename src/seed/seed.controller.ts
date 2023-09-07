import { Router } from 'express';
import {
  insertAllData,
  insertCharacters,
  insertMovies,
  insertGenre
} from './seed.service';

const router = Router();

router.get('/', insertAllData);
router.get('/character', insertCharacters);
router.get('/movies', insertMovies);
router.get('/genres', insertGenre);

export default router;