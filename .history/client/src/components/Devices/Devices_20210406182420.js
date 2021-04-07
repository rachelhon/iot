import React from 'react';
import { useSelector } from 'react-redux';

import Device from './Device/Device';
import useStyles from './styles';
class Devices extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          username:'Username',
          password:'Password',
          shows:false
        };
      }
      list()
      { 
           var myObj,i
           myObj = {
            "Simcard": [
              {"name":"Apple", "id":"1234566231"},
              {"name":"Samsung", "id":"5213465361"},
              {"name":"Reliance", "id":"3112312123" },
              {"name":"motorolla", "id":"1267318223" }
            ]
          }
          var disp=[]
          for (i in myObj.Simcard) {
             disp.push(<Device name={myObj.Simcard[i].name} id={myObj.Simcard[i].id}/>)
            }
       return disp;

      }
       
render() {
        return (
            <>
           <div>
               <h1>The list of the devices are as follows</h1>
               <Device/> 
           </div>

        </>
        )
      }


}


export default Devices;
