import * as api from '../api';
import {CREATE, FETCH_ALL} from '../constants/actionTypes';

export const getDevices = (email) => async (dispatch) => {
    console.log("fetching devices with email: " + email);
    try {
        const {data} = await api.fetchDevices({params: email});
        dispatch({type: FETCH_ALL, payload: data});
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

export const deleteDevice = (id) => async (dispatch) => {
    console.log('deleteDevice with id: ' + id);
    try {
      await api.deleteDevice(id);
  
      dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
        console.log(error.message);
    }
};