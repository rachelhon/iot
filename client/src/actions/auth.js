import {AUTH, FETCH} from '../constants/actionTypes';
import * as api from '../api/index.js';


export const signin = (formData, history) => async(dispatch) => {
    try {
        const {data} = await api.signIn(formData);
        dispatch({type: AUTH, data});
        const user = JSON.parse(localStorage.getItem('profile'));
        console.log(user.result?.isAdmin);
        if (user.result?.isAdmin) {
            console.log(user.result);
            history.push('/AdminHome');
        } else {
            history.push('/home');
        }
    } catch (error) {
        console.log(error);
        alert("Incorrect username or password.");
    }
};


export const signup = (formData, history) => async(dispatch) => {
    try {        

        // this calls to database (backend)
        const {data} = await api.signUp(formData);

        dispatch({type: AUTH, data});

        history.push('/home');
    } catch (error) {
        console.log(error.response);
        alert("Sign up unsuccessful");
    }
};

export const getusers = () => async(dispatch) => {
    try {
        const {data} = await api.getUsers();
        dispatch({type: FETCH, payload: data});
    } catch (error) {
        console.log(error);
    }
}