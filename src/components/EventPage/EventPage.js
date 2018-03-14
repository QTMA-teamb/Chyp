import React, { Component } from 'react';
import { withRouter } from 'react-router';
import fire from '../../fire.js';
import './EventPage.css';

const queryString = require('query-string');

class EventPage extends Component {

  componentWillMount() {

    // ensure that an id is passed in the URL, otherwise redirect to home page
    if (!queryString.parse(this.props.location.search).id) {
      this.props.history.push('/');
    }

    // listen for changes to event data
    this.eventRef = fire.database().ref('events/' + queryString.parse(this.props.location.search).id);
    this.eventRef.on('value', eventRes => {
      this.setState( eventRes.val() );
    });
  }

  componentWillUnmount() {
    // kill the event listener if it exists
    if (this.eventRef)
      this.eventRef.off();


  }
  Stripe(){
    alert("helo")
  }

  render() {
    console.log(this.state);
    if (!this.state) {
      return( null );
    } else {
      return (
        <div className = "Whole-e">

          <div className="Init-e">
            <img className="Cover-e" src={this.state.cover.source}></img>
          </div>

          <h1 className="Title-e"><b>{this.state.name}</b><span id="Hosted"> Hosted By: {!this.state.owner ? "Undefined" : this.state.owner.name}</span></h1>

          <div className="Date-e">
            <h1><b>Date & Time</b></h1>
            <h2>Start: {Date(this.state.start_time)}</h2>
            <h2>End:{Date(this.state.end_time)} </h2>
          </div>

          <div className="Location-e">
            <h1 id = "locationTitle"><b>Location</b></h1>
            <h2>{this.state.place.name}</h2>
            <h2>{!this.state.place.location ? "" : this.state.place.location.street}</h2>
          </div>

          <div className="Description-e">
            <h1><b>Description</b></h1>
            <p>{this.state.description}</p>
          </div>
          <button id = "tickets" onClick = {this.Stripe}>Buy Tickets!</button>
        </div>
      );
    }

  }

}

export default withRouter(EventPage);
