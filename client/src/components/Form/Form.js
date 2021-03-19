import React, {useState} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import useStyles from './styles';
import {createPost} from '../../actions/posts';

const Form = () => {
    const [postData, setPostData] = useState({
        deviceName: '', deviceID: ''});
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));

    }

    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">Add new device</Typography>
          <TextField name="device name" variant="outlined" label="device name" fullWidth value={postData.deviceName} onChange={(e) => setPostData({ ...postData, deviceName: e.target.value })} />
          <TextField name="device ID" variant="outlined" label="device ID" fullWidth value={postData.deviceID} onChange={(e) => setPostData({ ...postData, deviceID: e.target.value })} />
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
      </Paper>
    );
}

export default Form;