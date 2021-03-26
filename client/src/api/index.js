import axios from 'axios';

// axios instance 
const API = axios.create({baseURL: 'http://localhost:5000'});

export const fetchDevices = () => API.get('/devices');
export const createDevice = (newDevice) => API.post('/devices', newDevice);

export const signin = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);