import axios from 'axios';

// axios instance 
<<<<<<< Updated upstream
const API = axios.create({baseURL: 'http://localhost:5000'});
=======
const API = axios.create({baseURL: 'https://internet-of-things-f3.herokuapp.com'}); 
>>>>>>> Stashed changes

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization  = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});


export const fetchDevices = () => API.get('/devices');
export const createDevice = (newDevice) => API.post('/devices', newDevice);

export const signInAdmin = (formData) => API.post('/user/signinAdmin', formData);
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const deleteDevice = (id) => API.delete(`/devices/${id}`);