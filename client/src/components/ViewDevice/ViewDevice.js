
import React from 'react';
import {Button, TextField, Grow, Container} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteDevice } from '../../actions/devices';
import {admin} from "../../constants/adminEmail";
import useStyles from './styles.js';

const ViewDevices = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const data = useSelector((state) => state.devices);
  const user = JSON.parse(localStorage.getItem('profile'));
  const email = user?.result?.email; 

  const returnDevice = (e) => {
    e.preventDefault();
    if (email == admin) {
      history.push('/AdminHome');
    } else {
      history.push('/home');
    }
  }


  const editDeviceName = () => {

  }


  const enableSIM = () => {

  }


  const disableSIM = () => {

  }

  return (
    <Grow in>
      <Container>
        <form className={classes.root}>
        <TextField id="outlined-basic" variant="outlined" label={data.device.deviceName}/>
        <Button variant="contained" color="black" className={classes.button}>
          Edit
        </Button>
        </form>
        <form>
          <p>Device ID: {data.device.deviceID}</p>
          <p>Last time check in: {data.device.createdAt}</p>
          <p>Battery status:</p>
          <p>SIM card: </p>

        <br></br>  
        <Button variant="contained" size="small" color="black" onClick={enableSIM} className={classes.button}>
          Enable SIM card
        </Button>
        <Button variant="contained" size="small" color="black" onClick={disableSIM}>
          Disable SIM card
        </Button>
        </form>
        
        <br></br>
        <br></br>
        <Button variant="contained" color="primary" onClick = {returnDevice} className={classes.button}>
          Device page 
        </Button>
        
        <Button variant="contained" color="secondary" 
        onClick = {() =>
          dispatch(deleteDevice(data), history)
        }>
          De-register Device
        </Button>
      </Container>
    </Grow>
  );
}


export default ViewDevices;