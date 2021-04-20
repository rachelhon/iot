import React, { useEffect } from 'react';
import { Container, Grow, Grid, Button, Typography } from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import Users from '../User/Users';

const AdminHome = () => {
  const history = useHistory();

  const handleAddUser = (e) => {
    e.preventDefault();
    history.push('/addUser');
  }

  return (
    <Grow in>
      <Container align= "center">
        <Typography variant="h4" align="center">Users List</Typography>
        <br></br>
        <Users/>
        <br></br>
        <Button variant="outlined" color="primary" onClick ={handleAddUser}>
          + Add Users
        </Button>

      </Container>
    </Grow>
  );
};

export default AdminHome;