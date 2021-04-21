import React from 'react';
import { Container, Grow, Grid} from '@material-ui/core';


import Devices from '../Devices/Devices';

const Home = () => {

    return (
      <Grow in>
        <Container>
          <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
            <Grid item xs={12} sm={7}>
             <Devices/>
            </Grid>
          </Grid>
          
        </Container>
      </Grow>
    );
  };
  
export default Home;