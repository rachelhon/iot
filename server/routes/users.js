import express from 'express';

import {signin, signup, getUsers, deleteUsers } from '../controllers/user.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.get('/getusers', getUsers);
router.delete('/:id', auth, deleteUsers);


export default router;