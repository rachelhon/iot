import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {useDispatch} from 'react-redux';
import {getDevices} from '../../../actions/devices';
import { TextField, Button} from '@material-ui/core';
import useStyles from './styles';

const Device = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const getDevice= () => {

    }

    return (
        <div>
            <Card className={classes.Card}>
                <CardContent>
                    <h3>The name of the device is </h3>
                     <br/>
                     <br/>
                     <h3>The ID of the device is </h3>
                     <br/>
                     <br/>
                </CardContent>
                <Button onClick ={getDevice}>getDevice</Button>
            </Card>
        </div>
    );
}


export default Device;
