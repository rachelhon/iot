import React from 'react';
import useStyles from './styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {useDispatch} from 'react-redux';
import Button from '@material-ui/core/Button';
import { render } from '@testing-library/react';
class Device extends React.Component{
    render(){
        const dispatch = useDispatch();

        const getDevice = () => {
            
        }
    return (
        <div>
           <Card  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor:'#C0C0C0'
                  }}>
              < CardContent
               >
                     <h3>The name of the device is {this.props.name} </h3>
                     <br/>
                     <br/>
                     <h3>The ID of the device is {this.props.id} </h3>
                     <br/>
                     <br/>
                  <Button variant="contained" color="primary"  >
                       ToggleSim
                    </Button>

                
                </CardContent>
                </Card>
                <br/>
                <br/>

        </div>
    );}}


export default Device;
