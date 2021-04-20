import React, {useState} from 'react';
import { Container, Grow, TextField, Button} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import useStyles from './styles';
import {adminSignUp} from '../../actions/auth';

const initialState = {firstName: '', lastName: '', email: '', password: ''};

const AddUser = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adminSignUp(userData, history));
  }

  const cancel = (e) => {
    e.preventDefault();
    history.push('AdminHome');
  }

    return (
        <Grow in>
            <Container align="center">
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
              <TextField name="firstName" variant="outlined" label="First Name" onChange={handleChange} />
              <br/>
              <br/>
              <TextField name="lastName" variant="outlined" label="Last Name" onChange={handleChange} />
              <br/>
              <br/>
              <TextField name="email" variant="outlined" label="Email Address" onChange={handleChange} type="email"/>
              <br/>
              <br/>
              <TextField name="password" variant="outlined" label="Password" onChange={handleChange} type="password"/>
              <br/>
              <br/>
              <Button className={classes.button} variant="contained" color="primary" size="large" type="submit" >SUBMIT</Button>
              <Button className={classes.button} variant="contained" color="secondary" size="large" onClick={cancel} >CANCEL</Button>
            </form>
            </Container>
        </Grow>
    );
}

export default AddUser;