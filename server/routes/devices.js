import express from 'express';
import {getDevices, createDevice} from '../controllers/devices.js';


const router = express.Router();

router.get('/', getDevices);

// use auth middleware to prevent non-users to create device
router.post('/',  createDevice);

export default router;