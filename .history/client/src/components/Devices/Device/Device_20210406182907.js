import React from 'react';
import useStyles from './styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {useDispatch} from 'react-redux';
import { TextField, Button} from '@material-ui/core';
import useStyles from './styles';

const Device = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <div>
            <Card >

            </Card>
        </div>
    );
}


export default Device;
