import express from 'express';
import mongoose from 'mongoose';

import DeviceMessage from '../models/deviceMessage.js';

export const getDevices = async (req, res) => {
    try{
        const deviceMessages = await DeviceMessage.find();

        res.status(200).json(deviceMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createDevice = async(req, res) => {
    const {deviceName, deviceID, email, createdAt} = req.body;
    const device = req.body;
    const newDevice = new DeviceMessage(device);

    try{
        const existingDevice = await DeviceMessage.getOne(deviceID);

        if (existingDevice) {
            return res.status(400).json({message: "Device already exists"});
        }
        
        await newDevice.save();
        res.status(201).json(newDevice);
    } catch (error) {
        res.status(409).json({ message: error.message });
    } 
}