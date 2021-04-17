import React, {useState} from 'react';
import { Container, Grow, TextField, Button, Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import useStyles from './styles';

const initialState = {firstName: '', lastName: '', email: '', password: ''};

const AddUser = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(initialState);

  const handleChange = () => {

  }

  const handleSubmit = () => {

  }

  const clear = () => {

  }

    return (
        <Grow in>
            <Container>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
              <TextField name="firstName" variant="outlined" label="First Name" onChange={handleChange} />
              <br/>
              <br/>
              <TextField name="lastName" variant="outlined" label="Last Name" onChange={handleChange} />
              <br/>
              <br/>
              <TextField name="email" variant="outlined" label="Email Address" onChange={handleChange} />
              <br/>
              <br/>
              <TextField name="password" variant="outlined" label="Password" onChange={handleChange} />
              <br/>
              <br/>
              <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" >Submit</Button>
              <br/>
              <br/>
              <Button variant="contained" color="secondary" size="large" onClick={clear} >Clear</Button>
            </form>
            </Container>
        </Grow>
    );
}

export default AddUser;