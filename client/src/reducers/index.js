import { combineReducers } from 'redux';

import devices from './devices';
import authReducer from './auth.js';

export default combineReducers({devices, authReducer});