import React, { Component } from 'react';
import { withRouter } from 'react-router';
import fire from '../../fire.js';

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

  render() {
    console.log(this.state);
    if (!this.state) {
      return( null );
    } else {
      return (
        <div></div>
      );
    }
  }

}

export default withRouter(EventPage);
