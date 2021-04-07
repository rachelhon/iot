import React, {useState} from 'react';
import { TextField, Button} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import useStyles from './styles';
import {createDevice} from '../../actions/devices';

const initialState = {deviceName: '', deviceID: '', email: ''};

const Form = () => {
    const [deviceData, setDeviceData] = useState(initialState);
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    console.log('hi this is form');
    console.log(user._email);
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createDevice(deviceData, history));
      console.log("submitted device");
    }

    const handleChange = (e) => {
      setDeviceData({...deviceData, [e.target.name]: e.target.value});
    }

    const clear = () => {
      setDeviceData({deviceName: '', deviceID: '', email: ''});
    }

    return (
        
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <TextField name="deviceName" variant="outlined" label="device name" onChange={handleChange} />
          <br/>
          <br/>
          <TextField name="deviceID" variant="outlined" label="device ID" onChange={handleChange} />
          <br/>
          <br/>
          <TextField name ="email" variant = "outlined" label = "email" onChange={handleChange} />
          <br/>
          <br/>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" >Submit</Button>
          <br/>
          <br/>
          <Button variant="contained" color="secondary" size="large" onClick={clear} >Clear</Button>
        </form>
     
    );
}

export default Form;
