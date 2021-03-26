import React from 'react';
import './App.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import LoginView from './LoginView'
import SignupView from './SignupView'
import UserView from './UserView'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token:'mmm',
      ls:false
    };
    this.handlelogin=this.handlelogin.bind(this);
  }

  handlelogin(tok)
  { console.log("the value of the token during call back"+tok)
   this.setState({token:tok})
      if(tok.length!=0)
      {console.log("the if condition is executed in the handle login")
        this.setState({ls:true})
      }
    //!this.state.token?<LoginView hlogin={this.handlelogin}/>:<SignupView/>}

  }


  render() {
    return (
      <>
       {!this.state.ls?<LoginView handlelogin={this.handlelogin}/>:<UserView token={this.state.token}/>}
    </>
    )
  }
}

export default App;
