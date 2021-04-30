import React from 'react';
import Form from '../Form/Form';
import { Container, Grow} from '@material-ui/core';

const AddDevice = () => {

    //const user = useSelector((state) => state.users);

    return (
        <Grow in>
            <Container align="center">
                <Form/>
            </Container>
        </Grow>
    );
}

export default AddDevice;