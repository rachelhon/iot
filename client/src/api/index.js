import axios from 'axios';

const url = 'http://localhost:5000/devices';

export const fetchDevices = () => axios.get(url);
export const createDevice = (newDevice) => axios.post(url, newDevice);