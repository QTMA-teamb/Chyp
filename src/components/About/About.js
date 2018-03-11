import React, { Component } from 'react';
import './About.css';

class About extends Component {

  render() {
    return (
      <div class= "main">
      <h1>How does Chyp work?</h1>
      <h2>Set up ticketing for your Facebook events in less than 60 seconds</h2>

      <p>
        <b>Step One:</b> <br></br>
        Log in with Facebook<br></br><br></br>

        <b>Step Two:</b><br></br>
        Choose your event<br></br><br></br>

        <b>Step three:</b><br></br>
        Set a ticket price<br></br><br></br>

        <b>Step four:</b><br></br>
        Receive a payment link to share on the event
      </p>

        <div className='imgiPhone' id='phone-col'>
          <img src={require('./iphone.jpg')} alt='iPhone' id='iPhone'/>
        </div>

      </div>

    );
  }
}


export default About;
