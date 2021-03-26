import React, {useState} from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import useStyles from './styles';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {GoogleLogin} from 'react-google-login';
import Input from './Input';
import {signin, signup} from '../../actions/auth';

import Icon from './icon';

// initial value for text fields
const initialState = {firstName: '', lastName: '', email: '', password: '', confirmPassword: ''};

const Auth = () => {

    // Redux hook instances
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const handleShowPassword = () => setShowPassword((prevShowPAssword) => !prevShowPAssword);


    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      if (isSignup) {
        // send formData for data, history for navigation
        dispatch(signup(formData, history));
      } else {
        dispatch(signin(formData, history));
      }
    }
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value});
    }

    const switchMode = () => {
        // when switching, it reinitializes values
        //setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    }

    const googleSuccess = async(res) => {
      // the client ID is from Jiwon's console.developer.google.com OAuth key
      const result = res?.profileObj;
      const token = res?.tokenId;
      try {
        dispatch({type: 'AUTH', data: {result, token}});
        history.push('/');
      } catch (error) {
        console.log(error);
      }
    };

    const googleFailure = () => {
      alert("Google Sign In unsuccessful"); 
    }



    return (
        <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
            <>
              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
              <Input name="lastName" label="Last Name" handleChange={handleChange} half />
            </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>
          <GoogleLogin
            clientId="421185686556-8knoduo6ntut16m1mkptbr2fcvmf17m0.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button 
                className={classes.googleButton} 
                color = "primary" 
                fullWidth 
                onClick={renderProps.onClick} 
                disabled = {renderProps.disabled}
                startIcon={<Icon/>}
                variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
            />
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
          </Paper>
        </Container>
    );
};

export default Auth;