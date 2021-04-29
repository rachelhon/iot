import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import fetch from 'node-fetch';
import deviceRoutes from './routes/devices.js';
import userRouter from './routes/users.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/devices', deviceRoutes);
app.use('/user', userRouter);

app.get('/', (req,res) => {
    res.send('Hello to Internet of Things Tracking App');
});

// const PodGroupAPI = "https://api.podiotsuite.com/v3/auth/token";
// const PodGroupUsername = "lab@f3wireless.com";
// const PodGroupPassword = "78UWq&v6";

// fetch(PodGroupAPI, {
//     body: JSON.stringify({
//         "username": PodGroupUsername,
//         "password": PodGroupPassword
//     }),
//     headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json"
//     },
//     method: "POST"
// }).then(res => res.json())
// .then(res => console.log(res)); 

const CONNECTION_URL = 'mongodb+srv://iot:123@cluster0.kmvh1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);