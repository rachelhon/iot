import {AUTH} from '../constants/actionTypes';
import * as api from '../api/index.js';


export const signinAdmin = (formData, history) => async(dispatch) => {
    try {
       
            const {data} = await api.signInAdmin(formData);
          
         dispatch({type: AUTH, data});

         history.push('/adminHome');
        
    } catch (error) {
        console.log(error);
        alert("Incorrect username or password.");
    }
};


export const signin = (formData, history) => async(dispatch) => {
    try {
       
            const {data} = await api.signIn(formData);
          
         dispatch({type: AUTH, data});

         history.push('/home');
        
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
        alert("Google Sign Up unsuccessful");
    }
};