import React from 'react';
import './App.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import LoginView from './LoginView'
import SignupView from './SignupView';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token:''
    };
  }

  handlelogin(tok)
  {
    this.setState({token:tok})
    

  }

  render() {
    return (
      <>
        {!this.state.token?<LoginView hlogin={this.handlelogin}/>:<SignupView/>}
    
    
    </>
    )
  }
}

export default App;
