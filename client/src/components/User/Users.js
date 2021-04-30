import React, {useEffect} from 'react';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import {List} from '@material-ui/core/';
import { getusers } from '../../actions/auth';
import User from './User/User';

const Users = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const users = useSelector((state) => state.users);
  //console.log(users);

  useEffect(() => {
    dispatch(getusers());
  }, [dispatch]);

  return (
    !users.length ? <div>There are no users, please sign up</div> : (
    <div className={classes.root}>
      <div className={classes.userList}>
        <List className={classes.list}>
          {users.map((user) => (
            <User user={user} />
          ))}
        </List>
      </div>
    </div>
    )
  );
}



export default Users;