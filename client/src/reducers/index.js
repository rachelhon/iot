import { combineReducers } from 'redux';

import devices from './devices';
import users from './auth.js';

export default combineReducers({devices, users});