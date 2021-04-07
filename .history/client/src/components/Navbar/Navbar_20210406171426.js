import React, { useEffect, useState } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import useStyles from './styles';
import logo from '../../images/logo.png';

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    // history hook navigates to the main page
    history.push('/auth');
    // user has logged out
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        {/* Only go home if user is logged in */}
        {user ? (
          <Typography component={Link} to="/home" className={classes.heading} variant="h5" align="center">IoT Tracking App</Typography>
        ) : (
          <Typography component={Link} to="/auth" className={classes.heading} variant="h5" align="center">IoT Tracking App</Typography>
        )}
        <a href="http://f3wireless.com/">
          <img className={classes.image} src={logo} alt="f3 wireless logo" height="60" />
        </a>
      </div>
      <Toolbar className={classes.toolbar}>
        {/* Display user's information based on their profile/ Google account */}
        {user ? (
          <div className={classes.profile}>
            
            <Typography className={classes.userName} variant="h6">Welcome, {user.result.name}</Typography>
            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;