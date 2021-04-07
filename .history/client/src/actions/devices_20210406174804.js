import * as api from '../api';
import {CREATE} from '../constants/actionTypes';

export const getDevices = () => async (dispatch) => {
    try {
        const {data} = await api.fetchDevices()
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createDevice = (deviceData, history) => async (dispatch) => {
    try{
        const {data} = await api.createDevice(deviceData);
        dispatch({type: CREATE, payload: data});
        alert("Device successfully added!");
        history.push('/home');
    } catch(error){
        console.log(error.message);
    }
}