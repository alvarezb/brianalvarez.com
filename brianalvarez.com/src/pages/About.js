import React from 'react'

/*
className About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
}
*/

const About = () => (
  <div>
    <h3>Contact me!</h3>
    <h4>Old school methods</h4>
    <p>Click on the link below to solve a quick captcha to reveal my real email address. I look forward to hearing from you!</p>
    <p><a href="http://www.google.com/recaptcha/mailhide/d?k=01PcUO4Yv7xHlIfwJhbctw1g==&amp;c=0r_0GB1mXcz8YjeI8HlGL5i9W69CmgAGwumRU8tzENY=" onClick={function(){window.open('http://www.google.com/recaptcha/mailhide/d?k\x3d01PcUO4Yv7xHlIfwJhbctw1g\x3d\x3d\x26c\x3d0r_0GB1mXcz8YjeI8HlGL5i9W69CmgAGwumRU8tzENY\x3d', '', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300'); return false;}} title="Reveal this e-mail address">hidden_address@example.com</a></p>
    <p>Or by phone, if you prefer</p>
    <p>&#40;&#52;&#49;&#53;&#41;&#45;&#56;&#57;&#48;&#45;&#50;&#53;&#49;&#53;</p>
    <h4>Social media sites</h4>
    <p>Feel free to check me out on other locations around the web as well, including:</p>
    <a href='https://www.linkedin.com/in/alvarezb'>LinkedIn profile</a>
  </div>
)

export default About;