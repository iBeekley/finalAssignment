import React, { useState } from 'react';
import { 
  Button, 
  ButtonGroup, 
  Container, 
  Navbar, 
  Nav 
} from 'react-bootstrap';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link 
} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import Calendar from './components/calendar';
import Standings from './components/standings';
import races from './data/racedata';
import HomePage from './components/home';

export default function App() {

  return (
    <Container fluid style={{ 
      margin: '10px 0', 
      borderRadius: '12px', 
      padding: '20px', 
      backgroundColor: '#f8f9fa', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
    }}>
      <Router>
        <Navbar bg="light" variant="light" expand="lg">
          <Navbar.Brand href="/">F1 Data Center</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/standings">Standings</Nav.Link>
              <Nav.Link as={Link} to="/calendar">Calendar</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/calendar">
            <Calendar races={races} />
          </Route>
          <Route path="/standings">
            <Standings />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </Container>
    
  );
}
