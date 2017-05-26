import React from 'react'
import Tracker from '../props/Tracker.js'

class About extends React.Component {
  render(){
    return (
      <div>
        <Tracker/>
        <h3>Contact me!</h3>
        <h4>Old school methods</h4>
        <p>Click on the link below to solve a quick captcha to reveal my real email address. I look forward to hearing from you!</p>
        <p><a href="." onClick={function(){window.open('http://www.google.com/recaptcha/mailhide/d?k\x3d01PcUO4Yv7xHlIfwJhbctw1g\x3d\x3d\x26c\x3d0r_0GB1mXcz8YjeI8HlGL5i9W69CmgAGwumRU8tzENY\x3d', '', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300'); return false;}} title="Reveal this e-mail address">hidden_address@example.com</a></p>
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