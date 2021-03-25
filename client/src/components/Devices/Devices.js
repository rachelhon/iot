import React from 'react';
import { useSelector } from 'react-redux';

import Device from './Device/Device';

import useStyles from './styles';
const Devices = () => {
    const devices = useSelector((state) => state.devices);
    const classes = useStyles();

    console.log(devices);
    return (
        <>
            <h1 className={classes.heading}>List of Device instances</h1>
            <Device />
            <Device />
        </>
    );
}

export default Devices;