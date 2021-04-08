import express from 'express';

import {signin, signup, signinAdmin} from '../controllers/user.js';

const router = express.Router();

router.post('/signin', signin);
router.post('/signinAdmin', signinAdmin);
router.post('/signup', signup);


export default router;