import React from 'react';
import useStyles from './styles';
import {useHistory} from 'react-router-dom';
import { ListItemText, ListItem, Button} from '@material-ui/core/';
import moment from 'moment';

const Device = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const handleView = (e) => {
      e.preventDefault();
      history.push('/viewDevice');
    }

    return (
      <ListItem className = {classes.Item}>
        <ListItemText className = {classes.text}>Device Name: {props.device.deviceName} Device ID: {props.device.deviceID}</ListItemText>
        <Button variant="contained" color="black" onClick = {handleView}> View </Button>
      </ListItem>
      );
}


export default Device;
