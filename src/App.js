/*********************************************************************************
*  WEB422 –Assignment04
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part of this
*  assignment has been copied manually or electronically from any other source (including web sites) or 
*  distributed to other students.
* 
*  Name: HoGyeong CHo ID: 144561164 Date: July 5th 2018
*
********************************************************************************/ 

import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Overview from './Overview';
import Projects from './Projects';
import Teams from './Teams';
import Employees from './Employees';
import NotFound from './NotFound';
class App extends Component {
  render() {
  return (
    <Switch>
    <Route exact path='/' render={() => (
        <Overview />
    )}/>
    <Route exact path='/Projects' render={() => (
        <Projects />
    )}/>
    <Route exact path='/Teams' render={() => (
        <Teams />
    )}/>
    <Route exact path='/Employees' render={() => (
        <Employees />
    )}/>
    <Route render={() => (
      <NotFound />
    )}/>
    </Switch>
  
  );
  }
  }

export default App;