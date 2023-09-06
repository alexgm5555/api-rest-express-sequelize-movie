import { Router } from 'express';
import { createUser, LoginUser } from './auth.service';

const router = Router();

router.post('/register', createUser);
router.post('/login', LoginUser);

export default router;
