import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import {
  BrowserRouter as Router, Route, Link, Switch
} from "react-router-dom";
import Navbar from './NavBar';

class App extends Component {
  render() {
  return (
    <div className="App">
      
      
      <Router>
      <Navbar />
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  )
  }
}

export default App;
