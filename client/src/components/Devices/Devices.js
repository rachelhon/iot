import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import Device from './Device/Device';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import { getDevices } from '../../actions/devices';
import { Grid, CircularProgress } from '@material-ui/core';

const Devices = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile')); 
  const devices = useSelector((state) => state.devices);
  const email = user?.result?.email;

  useEffect(() => {
    dispatch(getDevices(email));
  }, [dispatch]);

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
  );
}

export default Devices;
