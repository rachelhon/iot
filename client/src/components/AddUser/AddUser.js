import React, {useEffect} from 'react';
import { Container, Grow} from '@material-ui/core';
import AddUserForm from './AddUserForm';


const AddUser = () => {
  return (
    <Grow in>
      <Container>
          <AddUserForm/>
      </Container>
    </Grow>
  );
}


export default AddUser;