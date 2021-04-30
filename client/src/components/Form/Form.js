import React, {useState} from 'react';
import {Typography, TextField, Button} from '@material-ui/core';
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
    // get username
    //const user = useSelector((state) => state.users);

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createDevice(deviceData, history));
      history.push('/AdminHome');
    }

    const handleChange = (e) => {
      setDeviceData({...deviceData, [e.target.name]: e.target.value});
    }

    const cancel = (e) => {
      e.preventDefault();
      history.push('/AdminHome');
    }

    return (
        
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6" className={classes.header}>
            Please add device name and device ID
          </Typography>
          <TextField name="deviceName" variant="outlined" label="device name" onChange={handleChange} />
          <br/>
          <br/>
          <TextField name="deviceID" variant="outlined" label="device ID" onChange={handleChange} />
          <br/>
          <br/>
          <TextField name="email" variant="outlined" label="email" onChange={handleChange} />
          <br/>
          <br/>
          <Button className={classes.button} variant="contained" color="primary" size="large" type="submit" >Submit</Button>
          <Button className={classes.button} variant="contained" color="secondary" size="large" onClick={cancel} >CANCEL</Button>
        </form>
     
    );
}

export default Form;
