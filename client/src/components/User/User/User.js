import React from 'react';
import useStyles from './styles';
import {useHistory} from 'react-router-dom';
import { ListItemText, ListItem, Button} from '@material-ui/core/';


const User = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const handleSeeDevice = () => {
  }
  // console.log(props);
  const deleteUser = () => {

  }
  
  return (
    <ListItem className = {classes.Item}>
        <ListItemText className = {classes.text}>User Name: {props.user.name} User email: {props.user.email}</ListItemText>
        <Button variant="contained" color="primary" size="small" onClick = {handleSeeDevice} > See Device </Button>
        <div width='5px' height='auto' display='inline-block'>
        </div>
        <Button variant="contained" color="secondary" size="small" onClick = {deleteUser}> Delete User </Button>
    </ListItem>
  );
}



export default User;