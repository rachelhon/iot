import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Device from './Device/Device';
import useStyles from './styles';


const Devices = ({ setCurrentId }) => {
  const devices = useSelector((state) => state.devices);
  const classes = useStyles();


  return (
    !devices.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {devices.map((device) => (
          <Grid key={device._id} item xs={12} sm={6} md={6}>
            <Device device={device} />
          </Grid>
        ))}
      </Grid>
    )
  )
};

export default Devices;