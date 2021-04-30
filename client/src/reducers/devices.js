import {SEND_DEVICE_DATA, CREATE, FETCH_ALL, DELETE_DEVICE} from '../constants/actionTypes';

const deviceReducer = (devices = [], action) => {
    switch (action.type) {
        case DELETE_DEVICE:
            // BUG ISSUE: ERROR OCCURS
            //return [...devices, action.payload];
            return action.payload;
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...devices, action.payload];
        case SEND_DEVICE_DATA:
            return action.payload;    
        default:
            return devices;
    }

};

export default deviceReducer;