import React, { useEffect } from 'react';
import { Container, Grow, Button, Typography } from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import Users from '../User/Users';
import Devices from '../Devices/Devices';

const AdminHome = () => {
  const history = useHistory();

  const handleAddUser = (e) => {
    e.preventDefault();
    history.push('/addUser');
  }

  const handleAddDevice = (e) => {
    e.preventDefault();
    history.push('/addDevice');
  }

  return (
    <Grow in>
      <Container align= "center">
        <Typography variant="h4" align="center">Users List</Typography>
        <br></br>
        <Users/>
        <br></br>
        <Devices/>
        <br></br>
        <Button variant="outlined" color="primary" onClick ={handleAddUser}>
          + Add Users
        </Button>
        <br></br>
        <br></br>
        <Button variant="contained" color="primary" onClick={handleAddDevice}>
             + Add Device
        </Button>

      </Container>
    </Grow>
  );
};

export default AdminHome;