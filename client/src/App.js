import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import AddDevice from './components/AddDevice/AddDevice';
import AdminHome from './components/AdminHome/AdminHome';
import AddUser from './components/AddUser/AddUser';

const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path="/auth" exact component={Auth}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/addDevice" exact component={AddDevice}/>
        <Route path="/adminHome" exact component={AdminHome}/>
        <Route path="/addUser" exact component={AddUser}/>
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;