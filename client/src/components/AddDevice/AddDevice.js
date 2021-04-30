import React, {useEffect} from 'react';
import Form from '../Form/Form';
import { Container, Grow} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

const AddDevice = () => {

    const user = useSelector((state) => state.users);

    return (
        <Grow in>
            <Container align="center">
                <Form/>
            </Container>
        </Grow>
    );
}

export default AddDevice;