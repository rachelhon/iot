import React from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

import User from './User/User';
import useStyles from './styles';


const Users = () => {
  const users = useSelector((state) => state.users);
  const classes = useStyles();


  return (
    !users.length ? <div>No users </div> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {users.map((user) => (
          <Grid key={user._id} item xs={12} sm={6} md={6}>
            <User user={user} />
          </Grid>
        ))}
      </Grid>
    )
  )
};

export default Users;