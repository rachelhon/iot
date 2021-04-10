import React from 'react';
import ReactDOM from'react-dom';
import Devices from './Devices';

it('renders without crashing',()=>{
const div=document.createElement('div');
ReactDOM.render(<Devices/>,div);
ReactDOM.unmountComponentAtNode(div);



});
