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
      <Container>
        <Typography variant="h4" align="center">Users List</Typography>
        <br></br>
        <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Users/>
          </Grid>
          <Button variant="contained" color="primary" onClick ={handleAddUser}>
            + Add Users
            </Button>
        </Grid>

      </Container>
    </Grow>
  );
};

export default AdminHome;