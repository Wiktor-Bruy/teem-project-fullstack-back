import { Router } from 'express';

import { homePublic } from '../controllers/home/homePublic.js';
import { homePrivate } from '../controllers/home/homePrivate.js';
import { authenticate } from '../middleware/authenticete.js';
import { babyState } from '../controllers/home/babyState.js';
import { momState } from '../controllers/home/momState.js';

const router = Router();

router.get('/', homePublic);
router.get('/home', authenticate, homePrivate);
router.get('/home/baby', authenticate, babyState);
router.get('/home/mom', authenticate, momState);

export default router;
