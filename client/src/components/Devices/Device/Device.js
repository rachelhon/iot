import React from 'react';
import useStyles from './styles';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ListItemText, ListItem, Button} from '@material-ui/core/';
import { sendDeviceData } from '../../../actions/devices';



const Device = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const handleView = (e) => {
      e.preventDefault();
      dispatch(sendDeviceData(props, history));
    }

    return (
      <ListItem>
        <ListItemText className = {classes.text}>Device Name: {props.device.deviceName} </ListItemText>
        <br></br>
        <br></br>
        <Button variant="contained" color="black" className={classes.button} onClick = {handleView}> View </Button>
      </ListItem>
      );
}


export default Device;
