import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Toolbar from './props/Toolbar.js'
import '../public/css/bootstrap.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Toolbar />
        </Router>
      </div>
    );
  }
}

export default App;
