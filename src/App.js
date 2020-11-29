import React from 'react';
import { BrowserRouter as Router,Switch, Route, Redirect } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import './App.css';

import Header from './Header';
import Home from './Pages/Home';

//var randomColor = require('randomcolor'); // import the script


const App = props => {
  return(
      <Container className=''>
        <Router>
          <Header></Header>
          <Switch>
            <Route path='/' id='home' exact>
              <Home />
            </Route>
            <Route path='/flextour' id='flextour' exact>
              
            </Route>
            <Route path='/contact' id='contact' exact>
              Contact
            </Route>
            <Redirect to='/' />
          </Switch>
        </Router>
      </Container>
  )
}

export default App;
