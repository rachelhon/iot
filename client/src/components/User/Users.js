import React, {useEffect} from 'react';
import useStyles from './styles';
import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ListItemText, ListItem, Button, List} from '@material-ui/core/';
import { getusers } from '../../actions/auth';
import User from './User/User';

const Users = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const users = useSelector((state) => state.users);
  console.log(users);

  useEffect(() => {
    dispatch(getusers());
  }, [dispatch]);

  return (
    !users.length ? <div>User list is empty, please add users</div> : (
    <div className={classes.root}>
      <div className={classes.userList}>
        <List>
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