import React from 'react'
import Tracker from '../props/Tracker.js'

class Home extends React.Component{
  render(){
    return (
      <div>
        <Tracker/>
        <h3>Hello!</h3>
        <p>I'm an engineer, tinkerer, performer and adventurer! I'm very bad at allowing myself down time, and can usually be found building someting, training, at work, or asleep.</p>
        <p>I was raised in the Pacific Northwest, inspired at MIT and then corrupted by San Francisco.</p>
        <p></p>
      </div>
    )
  }
}

export default Home;