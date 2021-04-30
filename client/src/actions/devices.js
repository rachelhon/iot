import * as api from '../api';
import {CREATE, FETCH_ALL, SEND_DEVICE_DATA, DELETE_DEVICE} from '../constants/actionTypes';

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
        history.push('/AdminHome');
    } catch(error){
        alert('Device name or ID already exists');
        console.log(error.message);
    }
}

export const deleteDevice = (deviceData, history) => async (dispatch) => {
    console.log(deviceData);
    
    const id = deviceData.device._id;
    console.log('deleteDevice with id: ' + id);
    try {
      await api.deleteDevice(id);
      alert('successfully de-registered the device, please go back to the main page');
      dispatch({ type: DELETE_DEVICE, payload: deviceData});
      history.push('/AdminHome');
    } catch (error) {
        console.log(error.message);
    }
};

export const sendDeviceData = (deviceData, history) => async(dispatch) => {
    try {
        dispatch({type: SEND_DEVICE_DATA, payload: deviceData});
        history.push('viewDevice');
    } catch (error) {
        console.log(error.message);
    }
}