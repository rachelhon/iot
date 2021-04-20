import axios from 'axios';

// axios instance 
const API = axios.create({baseURL: 'http://localhost:5000'}); 

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization  = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});


export const fetchDevices = (email) => API.get('/devices/getdevices', {params: email});
export const createDevice = (newDevice) => API.post('/devices/createdevices', newDevice);
export const deleteDevice = (id) => API.delete(`/devices/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const getUsers = () => API.get('/user/getusers');