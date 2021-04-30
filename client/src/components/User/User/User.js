import React from 'react';
import useStyles from './styles';
import {useHistory} from 'react-router-dom';
import { ListItemText, ListItem, Button} from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import { sendUserData, deleteUser } from '../../../actions/auth';

const User = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSeeDevice = (e) => {
    e.preventDefault();
    dispatch(sendUserData(props));
    history.push('/AdminViewDevice');
  }

  return (
    <ListItem className = {classes.Item}>
        <ListItemText className = {classes.text}>User Name: {props.user.name} User email: {props.user.email}</ListItemText>
        <Button variant="contained" color="primary" size="small" onClick = {handleSeeDevice} className={classes.button}> See Device </Button>
        <div width='5px' height='auto' display='inline-block'>
        </div>
        <Button variant="contained" color="secondary" size="small" onClick = {() => dispatch(deleteUser(props.user._id))} className={classes.button}> Delete User </Button>
    </ListItem>
  );
}



export default User;