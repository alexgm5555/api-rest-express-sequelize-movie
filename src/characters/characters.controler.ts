import { Router } from 'express';
import { validateToken } from '../auth/strategies/validateToken.strategies';
import { createCharacter } from './characters.service';

const router = Router();

router.post('/', validateToken, createCharacter);

export default router;