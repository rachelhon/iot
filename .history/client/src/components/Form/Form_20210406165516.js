import React, {useState} from 'react';
import { TextField, Button, Paper } from '@material-ui/core';
import {useDispatch} from 'react-redux';
import useStyles from './styles';
import {createDevice} from '../../actions/devices';

const Form = () => {
    const [deviceData, setDeviceData] = useState({
        deviceName: '', deviceID: ''});
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createDevice(deviceData));
    }

    const handleChange = (e) => {
      setDeviceData({...deviceData, [e.target.name]: e.target.value});
      console.log(deviceData);
    }

    const clear = () => {
      setDeviceData({deviceName: '', deviceID: ''});
    }

    return (
        
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <TextField name="device name" variant="outlined" fullWidth label="device name"handleChange={handleChange} />
          <br/>
          <br/>
          <TextField name="device ID" variant="outlined" label="device ID"handleChange={handleChange} />
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
