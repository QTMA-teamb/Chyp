import React, { Component } from 'react';
import './About.css';


class About extends Component {

  render() {
    return (
      <div class= "main">
        <h1>About Our Team</h1><br/>
        <div class = 'pplCont'>
          <div class = "cam">
            <h2><b>Product Manager:</b><br/> Cameron Perry</h2>
            <h3>Commerce</h3>
            <img src={require('./cam.png')}/>
          </div>
          <div class = "greg">
            <h2><b>Software Developer:</b><br/> Greg MacEachern</h2>
            <h3>Computer Engineering</h3>
            <img src={require('./greg.png')}/>
          </div>
          <div class = "tim">
            <h2><b>Junior Analyst:</b><br/> Timothy Than</h2>
            <h3>Commerce</h3>
            <img src={require('./tim.png')}/>
          </div>
          <div class = "brian">
            <h2><b>Junior Analyst:</b><br/> Brian Colbert</h2>
            <h3>Commerce</h3>
            <img src={require('./brian.png')}/>
          </div>
        </div>
        <address>
          Contact us: <a href="mailto:chypit.ca@gmail.com">chypit.ca@gmail.com</a>
        </address>

      </div>

    );
  }
}


export default About;
