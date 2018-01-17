import React, { Component } from 'react'
import {
  Route,
  Link
} from 'react-router-dom'

import './Toolbar.css'

import Home from '../pages/Home.js'
{/*
import Projects from '../pages/Projects.js'
*/}
import Photography from '../pages/Photography.js'
import About from '../pages/About.js'

import MenuItem from './MenuItem.js'

class Toolbar extends Component {

  render() {
    return (
      <div>
        <div id="toolbar">
          <ul>
            <li><Link to="/"><MenuItem>Home</MenuItem></Link></li>
            {/*
            <li><Link to="/projects"><MenuItem>Projects</MenuItem></Link></li>
          */}
            <li><Link to="/photography/circus"><MenuItem>Circus</MenuItem></Link></li>
            <li><Link to="/photography/portraits"><MenuItem>Portraits</MenuItem></Link></li>
            <li><Link to="/photography/events"><MenuItem>Events</MenuItem></Link></li>
            <li><Link to="/photography/others"><MenuItem>Others</MenuItem></Link></li>
            <li><Link to="/about"><MenuItem>About me</MenuItem></Link></li>
          </ul>
          <h2 className="title-name ">Brian Alvarez</h2>
          <hr/>
        </div>
        <div>
          <Route exact path="/" component={Home}/>
          {/*
          <Route exact path="/projects" component={Projects}/>
        */}
          <Route exact path="/photography" component={Photography}/>
          <Route exact path="/photography/:type" component={Photography}/>
          <Route exact path="/about" component={About}/>
        </div>
      </div>
    );
  }
}

export default Toolbar;