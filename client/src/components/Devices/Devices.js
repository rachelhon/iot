import React, {useEffect, useState} from 'react';
import Device from './Device/Device';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from './styles';
import { getDevices } from '../../actions/devices';
import { List } from '@material-ui/core';

const Devices = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const devices = useSelector((state) => state.devices);
  const user = useSelector((state) => state.users);
  let email = '';
  if (user.authData?.result != null) {
    email =  user.authData?.result?.email;
  }

  if (user?.user?.email != null) {
    email =  user.user.email;
  }

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
