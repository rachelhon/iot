import express from 'express';

import {signin, signup, getUsers } from '../controllers/user.js';

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.get('/getusers', getUsers);


export default router;