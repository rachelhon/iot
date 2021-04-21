import React from 'react';
import { Container, Grow, Grid, Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Devices from '../Devices/Devices';
import {admin} from '../../constants/adminEmail';
import { sendUserData } from '../../actions/auth';
const adminData = {
  user:{email: admin}
};

const AdminViewDevice = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);

  const backToMain = (e) => {
    e.preventDefault();
    dispatch(sendUserData(adminData));
    history.push('/AdminHome');
  }

  return (
    <Grow in>
      <Container align="center">
          <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
            <Grid item xs={12} sm={7}>
             <Devices/>
            </Grid>
          </Grid>
          <br></br>
        <Button variant="contained" color="primary" onClick = {backToMain}> Main Page </Button>
      </Container>
    </Grow>
  );
}


export default AdminViewDevice;