import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import Device from './Device/Device';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import { getDevices } from '../../actions/devices';
import { Typography, List} from '@material-ui/core';
import { generatePath } from 'react-router';

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
    !devices.length ? <div>Device list is empty, please add devices</div> : (
      <div className={classes.root}>
        <div className={classes.deviceList}>
          <List>
            {devices.map((device) => (
              <Device device={device} />
            ))}
          </List>
        </div>

      </div>
    )
  );
}

export default Devices;
