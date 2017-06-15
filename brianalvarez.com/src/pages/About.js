import React from 'react'
import Tracker from '../props/Tracker.js'

class About extends React.Component {
  render(){
    return (
      <div>
        <Tracker/>
        <h3>Contact me!</h3>
        <h4>Old school methods</h4>
        <p>I look forward to hearing from you via email!</p>
        <p><img src="files/emailAddress.png" alt="Image containing email address"/></p>
        <p>Or by phone, if you prefer</p>
        <p>&#40;&#52;&#49;&#53;&#41;&#45;&#56;&#57;&#48;&#45;&#50;&#53;&#49;&#53;</p>
        <h4>Social media sites</h4>
        <p>Feel free to check me out on other locations around the web, including:</p>
        <a href='https://www.linkedin.com/in/alvarezb'>LinkedIn profile</a><br/>
        <a href='https://www.facebook.com/brian3alvarez'>Facebook profile</a><br/>
      </div>
    );
  }
}

export default About;