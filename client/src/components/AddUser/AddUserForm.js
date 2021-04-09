import React, {useState} from 'react';
import { TextField, Button} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import useStyles from './styles';

const initialState = {userName: '', userID: '', email: '', password: ''};

const AddUserForm = () => {
    const [userData, setUserData] = useState(initialState);
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    // get username
    //const user = JSON.parse(localStorage.getItem('profile'));

    const handleSubmit = (e) => {
      e.preventDefault();
      //dispatch(createDevice(deviceData, history));
    }

    const handleChange = (e) => {
      setUserData({...userData, [e.target.name]: e.target.value});
    }

    const clear = () => {
      setUserData({userName: '', userID: '', email: '', password: ''});
    }

    return (
        
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <TextField name="userName" variant="outlined" label="user name" onChange={handleChange} />
          <br/>
          <br/>
          <TextField name="userID" variant="outlined" label="user ID" onChange={handleChange} />
          <br/>
          <br/>
          <TextField name="email" variant="outlined" label="email" onChange={handleChange} />
          <br/>
          <br/>
          <TextField name="password" variant="outlined" label="password" onChange={handleChange} />
          <br/>
          <br/>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" >Submit</Button>
          <br/>
          <br/>
          <Button variant="contained" color="secondary" size="large" onClick={clear} >Clear</Button>
        </form>
     
    );
}

export default AddUserForm;
