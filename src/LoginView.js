import React from 'react';
import SignupView from './SignupView'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Card from 'react-bootstrap/Card'
class LoginView extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          username:'',
          password:''
        };
      }
      handleusername(name)
      {
          this.setState({username:name})

      }
      handlepassword(password)
      {

              this.setState({password:password})

      }
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
           
          }}><h1>Welcome to F3 Wireless</h1></div>
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
                       Login
                    </Button></div>
                    <br/>
                    <br/>
                    <div>
                    
                    <Button variant="contained" color="primary" >
                        Signup</Button>

                </div>
                </Card.Body>
                </Card>
          
        </div>
       
        </>
        )
      }


}
export default LoginView;