import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Device from './Device/Device';
import useStyles from './styles';


const Devices = ({ setCurrentId }) => {
  const devices = useSelector((state) => state.devices);
  const classes = useStyles();


  return (
    !devices.length ? <Typography variant="body2" color="textPrimary" component="p">No devices found. Add one below.</Typography> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {devices.map((device) => (
          <Grid key={device._id} item xs={12} sm={12} md={12}>
            <Device device={device} />
          </Grid>
        ))}
      </Grid>
    )
  )
};

export default Devices;