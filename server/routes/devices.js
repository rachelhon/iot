import express from 'express';
import {getDevices, createDevice, deleteDevice} from '../controllers/devices.js';


const router = express.Router();
import auth from "../middleware/auth.js";
router.get('/', getDevices);

// use auth middleware to prevent non-users to create device
router.post('/',  createDevice);
router.delete('/:id', auth, deleteDevice);

export default router;