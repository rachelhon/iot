import React from 'react';
import SignupView from './SignupView'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
class UserDisplay extends React.Component
{

render()
{
  return(
    <>
     <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
           
          }}>
       <Card>
         <CardContent>
             <h3>{this.props.name} </h3>
                       <br/>
                        <br/>
            <h3>{this.props.age}</h3>
              <br/>
              <br/>
         <Button variant="contained" color="primary" onClick={()=>this.handlesignup()} >
                        Location</Button>
                        <br/>
                        <br/>
        <Button variant="contained" color="primary" onClick={()=>this.handlesignup()} >
                        Location</Button>

           </CardContent>
           </Card>
         </div>
    </>


  )




}
}
export default UserDisplay;