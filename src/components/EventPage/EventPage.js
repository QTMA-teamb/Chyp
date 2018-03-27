import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Button, Progress } from 'reactstrap';
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from "react-google-maps"
import fire from '../../fire.js';
import moment from 'moment';
import './EventPage.css';
import EventMap from './EventMap';
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

  Stripe() {
    window.alert("helo")
  }

  render() {

    const TESTING_TICKET_COMPLETION_RATE = 25;

    if (!this.state) {
      return( null );
    } else {
      return (
        <div id="event-page" className='container-fluid'>

          <div className='row'>
            <div className="col-12" id="cover-image">
              <img src={this.state.cover.source} alt='cover' />
            </div>
          </div>

          <div className='row' id='title-row'>
            <div className='col-10 offset-1'>
              <h3>{this.state.name}<span>{!this.state.owner ? "" : 'by ' + this.state.owner.name}</span></h3>
            </div>
          </div>

          <div className="row" id='date-location'>
            <div className='col-10 offset-1 col-md-3'>
              <h6 className='event-page-header'>{'DATE AND TIME'}</h6>
              <p>{moment(this.state.start_time).format('llll') + ' -'}<br/>{moment(this.state.end_time).format('llll')}</p>
            </div>
            <div className='col-10 offset-1 col-md-3'>
              <h6 className='event-page-header' id='location-header'>{'LOCATION'}</h6>
              <p>{this.state.place.name}<br/>{this.state.place.location ? this.state.place.location.street : ''}<br/><a href='#map'>{'View Map'}</a></p>
            </div>
          </div>

          <div className='row'>
            <div className='col-10 offset-1'>

              <h6 className='event-page-header'>{'TICKETS'}</h6>

                <div className='row'>
                  <div className='col-12 col-md-9 ticket-col'>
                    <Progress color='success' value={TESTING_TICKET_COMPLETION_RATE} />
                    <p>{ TESTING_TICKET_COMPLETION_RATE + '% SOLD'}</p>
                  </div>
                  <div className='col-12 col-md-3 ticket-col'>
                    <Button color='primary' onClick={this.Stripe} disabled={TESTING_TICKET_COMPLETION_RATE >= 100}>{ TESTING_TICKET_COMPLETION_RATE >= 100 ? 'SOLD OUT' : 'REGISTER'}</Button>
                  </div>
                </div>

            </div>
          </div>

          <div className='row'>
            <div className='col-10 offset-1'>
              <h6 className='event-page-header'>{'DESCRIPTION'}</h6>
              <p>{this.state.description}</p>
            </div>
          </div>

          { this.state.place.location ? (
            <div className='row'>
              <div className='col-12 col-md-8 offset-md-2' id='map'>
                <EventMap
                  lat={this.state.place.location.latitude}
                  lng={this.state.place.location.longitude}
                  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `400px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />
              </div>
            </div>
          ) : null }

        </div>
      );
    }

  }

}

export default withRouter(EventPage);
