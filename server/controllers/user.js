import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import userModel from '../models/user.js';

// all controller has request and response
export const signin = async(req, res) => {
    const {email, password} = req.body;
    let isAdmin = false;

    try {
        // interact with DB to find one matching email
        const existingUser = await userModel.findOne({email});

        if (!existingUser) {
            return res.status(404).json({message: "User does not exist"});
        }

        // manual check
        if (existingUser.email == "admin@gmail.com") {
            isAdmin = true;
            console.log(existingUser);
        }

        // use bcrypt to compare passwords
        const isPassword = await bcrypt.compare(password, existingUser.password);

        if (!isPassword) {
            return res.status(400).json({message: "Password does not match"});
        }

        // make a token to store data
        // TODO second argument of jwt.sign is secret, later we have to make a env file to store this secret val, 
        // right now we use test for tmp secret
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', {expiresIn: "1h"});
        if (isAdmin) {
            const adminUser = {email: existingUser.email, name: existingUser.name, id: existingUser._id, password: existingUser.password, isAdmin: true};
            res.status(200).json({result:adminUser, token});
        } else {
            res.status(200).json({result:existingUser, token});
        }
        
    } catch (error) {
        res.status(500).json({message: "Building token for response has failed"});
    }
}

export const signup = async(req, res) => {
    const {firstName, lastName, email, password} = req.body;
    console.log(req.body);

    
    try {
        const existingUser = await userModel.findOne({email});

        if (existingUser) {
            return res.status(400).json({message: "User already exists"});
        }

        // second argument salt represents the level of diffculty to hash passwords, we now use 12 for default
        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await userModel.create({email, password: hashedPassword, name: `${firstName} ${lastName}`});
        console.log(result);

        const token = jwt.sign({email: result.email, id: result._id}, 'test', {expiresIn: '1h'});

        res.status(200).json({result: result, token});
    } catch (error) {
        res.status(500).json({message: "Building token for response has failed"});
    }
}

// all controller has request and response
export const getUsers = async(req, res) => {
    try {
        // interact with DB to find one matching email
        const existingUsers = await userModel.find();

        res.status(200).json(existingUsers);
    } catch (error) {
        res.status(500).json({message: "Building token for response has failed"});
    }
}
