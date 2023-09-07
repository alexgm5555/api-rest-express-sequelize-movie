import { Router } from 'express';
import { validateToken } from '../auth/strategies/validateToken.strategies';
import { 
  createCharacter,
  findCharacter,
  updateCharacter,
  deleteCharacter
} from './characters.service';

const router = Router();


router.post('/', validateToken, createCharacter);
router.get('/', validateToken, findCharacter);
router.patch('/', validateToken, updateCharacter);
router.delete('/', validateToken, deleteCharacter);


export default router;
