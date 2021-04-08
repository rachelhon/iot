import React, { useEffect } from 'react';
import { Container, Grow, Grid, Button, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getDevices } from '../../actions/devices';

import Users from '../Users/Users';

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getDevices());
  }, [dispatch]);

  const handleAddUsers = (e) => {
    e.preventDefault();
    //history.push('/AddUsers');
  }

  return (
    <Grow in>
      <Container>
        <Typography variant="h4" align="center">Users List</Typography>
        <br></br>
        <Grid container direction="column" justify="center" alignItems="center" spacing={3}>

          <Grid item xs={12} sm={7}>
              <Users />
          </Grid>
          <Button variant="contained" color="primary" onClick={}>
            + Add Users
            </Button>


        </Grid>

      </Container>
    </Grow>
  );
};

export default adminHome;