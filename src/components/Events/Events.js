import React, { Component } from 'react';
import './Events.css';
import axios from 'axios';

class Events extends Component {

  componentDidMount(){
    if ((!this.props.user_location) ||(!this.props.accessToken) ){
      window.location.href = "../";
      alert('Please Login With Facebook to Continue!')
    }else if (this.props.user_location == "Not Defined"){
      alert('Please Enter A Location For Your Area')
      //Add textbox support
    }

  }

  render() {
      return (
        <div>
          <div class = "local">
            <h1>Local Events</h1>
            <h2>These events are gathered based on your location in </h2>
          </div>
          <div class = "custom">
            <h1>Events For You</h1>

          </div>
        </div>

      )
  }
}

export default Events;
