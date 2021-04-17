
import React from 'react';
import { Typography, Button, TextField} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteDevice } from '../../actions/devices';


const ViewDevices = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const returnDevice = () => {

  }

  const deleteDevice = () => {

  }

  return (
    <div>
      <Typography>
        Text describing state of system, i.e. error message
      </Typography>
      <div class="Google map" border="1px solid">
        google map
      </div>

      <Button variant="contained" color="primary" onClick = {returnDevice} >
        Device page
      </Button>

      <Button variant="contained" color="secondary" onClick = {deleteDevice}>
        De-register Device
      </Button>

      <TextField>
        
      </TextField>
    </div>
  );
}



export default ViewDevices;