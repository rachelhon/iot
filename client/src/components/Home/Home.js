import React, {useEffect} from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getDevices } from '../../actions/devices';

import Devices from '../Devices/Devices';
import Form from '../Form/Form';

const Home = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getDevices());
    }, [dispatch]);
  
    return (
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
             <Devices/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    );
  };
  
export default Home;