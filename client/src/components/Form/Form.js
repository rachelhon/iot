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

    const clear = () => {
      setDeviceData({deviceName: '', deviceID: ''});
    }

    return (
        <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <TextField name="device name" variant="outlined" label="device name" fullWidth value={deviceData.deviceName} onChange={(e) => setDeviceData({ ...deviceData, deviceName: e.target.value })} />
          <TextField name="device ID" variant="outlined" label="device ID" fullWidth value={deviceData.deviceID} onChange={(e) => setDeviceData({ ...deviceData, deviceID: e.target.value })} />
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
      </Paper>
    );
}

export default Form;