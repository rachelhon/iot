import React from 'react';
import ReactDOM from'react-dom';
import icon from './icon';


it('renders Icon without crashing',()=>{

    const div=document.createElement('div');
    ReactDOM.render(<icon/>,div);
    ReactDOM.unmountComponentAtNode(div);
});