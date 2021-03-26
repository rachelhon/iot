import React from 'react';
import SignupView from './SignupView'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card';
import App from './App'
import UserView from './UserView'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
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
        console.log("the handlelogin function is excuted in the login view")
        this.props.handlelogin('abc')
        console.log("this has been executed after callback")
      
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
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
           
          }}>
          <Card  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: '20%',
                    height: '50%',
                    backgroundColor:'#C0C0C0'
                  }}>
              < CardContent
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
                   
                    <div>
                    
                    <Button variant="contained" color="primary" onClick={()=>this.handlesignup()} >
                        Signup</Button>

                </div>
                </CardContent>
                </Card>
                </div>
          
        </div>:<SignupView/>
                   }
        </>
        )
      }


}
export default LoginView;