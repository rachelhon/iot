import * as api from '../api';

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
        const {data} = await api.createDevice(device);
        dispatch({type: 'CREATE', payload: data});
    } catch(error){
        console.log(error.message);
    }
}