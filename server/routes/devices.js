import express from 'express';
import {getDevices, createDevice} from '../controllers/devices.js';
const router = express.Router();

router.get('/', getDevices);
router.post('/', createDevice);

export default router;