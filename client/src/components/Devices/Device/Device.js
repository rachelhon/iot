import React from 'react';
import useStyles from './styles';
import { render } from '@testing-library/react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import {deleteDevice } from '../../../actions/devices';
const Device = ({ device, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
  
    return (
        
      <Card className={classes.card}>
           <CardMedia className={classes.media} title={device.deviceName} />
        <div className={classes.overlay}>
          <Typography variant="h6">{device.deviceName}</Typography>
          <Typography variant="body2">{moment(device.createdAt).fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(device._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{device.deviceID}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" onClick={() => dispatch(deleteDevice(device._id))}><DeleteIcon fontSize="small" /> Delete</Button>
        </CardActions>
      </Card>
    );
  };
  
export default Device;
