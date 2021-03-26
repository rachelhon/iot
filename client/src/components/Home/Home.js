import React, {useEffect} from 'react';
import { Container, Grow, Grid, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { getDevices } from '../../actions/devices';

import Devices from '../Devices/Devices';

const Home = () => {
    const dispatch = useDispatch();
    const history = useHistory();
  
    useEffect(() => {
      dispatch(getDevices());
    }, [dispatch]);
  
    const handleAddDevice = (e) => {
      e.preventDefault();
      history.push('/AddDevice');
    }

    return (
      <Grow in>
        <Container>
          <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
            <Grid item xs={12} sm={7}>
             <Devices/>
            </Grid>
            
            <Button variant="contained" color="primary" onClick={handleAddDevice}>
             + Add Device
            </Button>
          </Grid>
          
        </Container>
      </Grow>
    );
  };
  
export default Home;