import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'

class SignupView extends React.Component
{
    render() {
        return (
          <>
          <div
          >
          <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
           
          }}><h1>Please Signup</h1></div>
          <br/>
          <br/>
          <br/>
          <Card style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    
                  }}>
              <Card.Body style={{backgroundcolor:'blue'}}
               >
          <div
          >
          <TextField
           id="first-name"
           label="UserName"
            margin="normal"
                /></div>
                <br/>
                <br/>
                <div
                 >
                <TextField
                   id="first-name"
                  label="Password"
                   margin="normal"
                />
                </div>
                <br/>
                <br/>
                <div>
                     
                  <Button variant="contained" color="primary">
                  Signup
                    </Button></div>
                    <br/>
                    <br/>
                </Card.Body>
                </Card>
          
        </div>
       
        </>
        )
      }


}
export default SignupView;