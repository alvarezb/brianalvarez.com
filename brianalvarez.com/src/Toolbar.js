import React, { Component } from 'react'
import {
  Route,
  Link
} from 'react-router-dom'
import Home from './pages/Home.js'
import Projects from './pages/Projects.js'
import Photography from './pages/Photography.js'
import About from './pages/About.js'

class Toolbar extends Component {
  render() {
    return (
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/photography">Photography</Link></li>
            <li><Link to="/about">About me</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/photography" component={Photography}/>
        </div>
    );
  }
}

export default Toolbar;