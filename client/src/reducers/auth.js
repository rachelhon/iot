
import {AUTH, LOGOUT, FETCH, SEND_USER_DATA} from '../constants/actionTypes';

const authReducer  = (state = {authData: null}, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data}));
            return { ...state, authData: action?.data};

        case LOGOUT:
            // clear data in local storage
            localStorage.clear();
            return { ...state, authData: null};
        case FETCH:
            return action.payload;
        case SEND_USER_DATA:
            return action.payload;
        default:
            return state;
    }

};

export default authReducer;