import express from 'express';
import mongoose from 'mongoose';

import DeviceMessage from '../models/deviceMessage.js';
import userModel from '../models/user.js';
import {admin} from "../constants/adminEmail.js";

export const getDevices = async (req, res) => {
    const email = req.query['params'];
    try{
        if (email == admin) {
            const deviceMessages = await DeviceMessage.find();
            res.status(200).json(deviceMessages);
            return;
        }
        const deviceMessages = await DeviceMessage.find({email});
        //console.log(deviceMessages);
        res.status(200).json(deviceMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createDevice = async(req, res) => {
    const {deviceName, deviceID, email, createdAt} = req.body;
    const device = req.body;
    const newDevice = new DeviceMessage(device);
    console.log(deviceName + ' ' + deviceID + ' ' + email);
    try{
        // check if the email is valid
        const existingUser = await userModel.findOne({email});
        if (!existingUser) {
            return res.status(400).json({message: "User does not exist"});
        }
        // check if any device name duplicate exists
        const existingDeviceName = await DeviceMessage.findOne({deviceName});
        if (existingDeviceName) {
            return res.status(400).json({message: "Device Name already exists"});
        }
        // check if any device id duplicate exists
        const existingDeviceID = await DeviceMessage.findOne({deviceID});
        if (existingDeviceID) {
            return res.status(400).json({message: "Device ID already exists"});
        }
        // need to implement duplicate device id and name
        await newDevice.save();
        res.status(201).json(newDevice);
    } catch (error) {
        res.status(409).json({ message: error.message});
    } 
}

export const deleteDevice = async (req, res) => {
    const {id } = req.params;
    console.log(id);
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No device with id: ${id}`);
        }
        await DeviceMessage.findByIdAndRemove(id);
        res.status(200).json({ message: "Device deleted successfully." });
    } catch (error) {
        res.status().json({
            message: error.message
        });
    }
    
}