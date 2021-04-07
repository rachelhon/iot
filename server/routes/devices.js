import express from 'express';
import {getDevices, createDevice, deleteDevice} from '../controllers/devices.js';

import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/getdevices', getDevices);
// use auth middleware to prevent non-users to create device
router.post('/createdevices',  createDevice);
router.delete('/:id', auth, deleteDevice);

export default router;