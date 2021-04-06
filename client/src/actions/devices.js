import * as api from '../api';

export const getDevices = () => async (dispatch) => {
    try {
        const {data} = await api.fetchDevices()
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createDevice = (device) => async (dispatch) => {
    try{
        const {data} = await api.createDevice(device);
        dispatch({type: 'CREATE', payload: data});
    } catch(error){
        console.log(error.message);
    }
}

export const deleteDevice = (id) => async (dispatch) => {
    try {
      await api.deleteDevice(id);
  
      dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
        console.log(error.message);
    }
  };