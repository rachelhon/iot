import React, {useEffect} from 'react';
import Form from '../Form/Form';
import { Container, Grow, Grid, Button } from '@material-ui/core';

const AddDevice = () => {

    return (
        <Grow in>
            <Container>
                <Form/>
            </Container>
        </Grow>
    );
}

export default AddDevice;