import express from 'express';
import mongoose from 'mongoose';

import DeviceMessage from '../models/deviceMessage.js';

export const getDevices = async (req, res) => {
    const email = req.query['params'];
    console.log("getDevice in backend");
    try{
        const deviceMessages = await DeviceMessage.find({email});
        console.log(deviceMessages);
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
        // need to implement duplicate device id and name
        await newDevice.save();
        res.status(201).json(newDevice);
    } catch (error) {
        res.status(409).json({ message: error.message});
    } 
}

export const deleteDevice = async (req, res) => {
    const {id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No device with id: ${id}`);

    await DeviceMessage.findByIdAndRemove(id);
    res.status(200).json({ message: "Device deleted successfully." });
}