import React from 'react';
import SignupView from './SignupView'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Card from 'react-bootstrap/Card'
import App from './App'
import UserView from './UserView'
class LoginView extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          username:'Username',
          password:'Password',
          shows:false
        };
      }
      handleusername(event)
      {
          this.setState({username:event.target.value})
           
      }
      handlepassword(event)
      { 

              this.setState({password:event.target.value})
             

      }
      handlelogin()
      {//fetch request comes here
        this.props.handlelogin('abc')
      
      }
      handlesignup()
      {
        this.setState({shows:true})


      }
       
render() {
        return (
            <>
           {
             !this.state.shows?
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
            margin="normal"
            label={this.state.username}
            onChange={(event)=>this.handleusername(event)}
                /></div>
                <br/>
                <br/>
                <div
                 >
                <TextField
                   id="first-name"
                  label={this.state.password}
                   margin="normal"
                   onChange={(event)=>this.handlepassword(event)}
                />
                </div>
                <br/>
                <br/>
                <div>
                     
                  <Button variant="contained" color="primary" onClick={()=>this.handlelogin()} >
                       Login
                    </Button></div>
                    <br/>
                    <br/>
                    <div>
                    
                    <Button variant="contained" color="primary" onClick={()=>this.handlesignup()} >
                        Signup</Button>

                </div>
                </Card.Body>
                </Card>
          
        </div>:<SignupView/>
                   }
        </>
        )
      }


}
export default LoginView;