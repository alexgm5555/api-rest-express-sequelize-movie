import { Router } from 'express';
import {
  insertAllData,
  insertCharacters,
  insertMovies
} from './seed.service';

const router = Router();

router.get('/', insertAllData);
router.get('/character', insertCharacters);
router.get('/movies', insertMovies);

export default router;