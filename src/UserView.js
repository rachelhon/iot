import React from 'react';
import SignupView from './SignupView'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Card from 'react-bootstrap/Card'
import App from './App'
import UserDisplay from './UserDisplay';

class UserView extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          username:'',
          password:'',
          shows:''
        };
      }
      check()
      { var myObj
        myObj={
          "name":"John",
          "age":30,
          "cars":[ "Ford", "BMW", "Fiat" ]
          }
          var ar=[]
      ar.push(<UserDisplay name={myObj.name} age={myObj.age}/>)
      return ar
      }
      
    render() {
        return (
            <>
           
          <div
          >
          <h1>This is the user view</h1>
          {this.check()}
        </div>
       
        </>
        )
      }


}
export default UserView;
