
import {AUTH, LOGOUT} from '../constants/actionTypes';

const authReducer  = (state = {authData: null}, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data}));
            return { ...state, authData: action?.data};

        case LOGOUT:
            // clear data in local storage
            localStorage.clear();
            return { ...state, authData: null};
        default:
            console.log('Authentication Reducer default checking');
            return state;
    }

};

export default authReducer;