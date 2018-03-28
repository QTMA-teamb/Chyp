import React, { Component } from 'react';
import './Events.css';
import ViewCard from '../View/ViewCard';
import firebase from '../../fire.js';

var newLocation;
var events = [];

function userLocation() {
  var location = prompt("Please enter your city:", "Your Location");
  if (location == "") {
    alert('Please Enter A Valid Location');
    userLocation();
    return
  }
  else if (location == null){
    window.location.href = "../";
  }
  else {
     return location;
  }
}

class Events extends Component {

  constructor(props) {
    super(props);
    this.state = { events: [] }
  }

  componentWillMount() {
    var recents = firebase.database().ref('events').orderByKey().limitToLast(15);
    recents.on('child_added', snapshot => {
      var ref = snapshot.val()
        console.log(ref)

      let eventTime = new Date(ref.start_time).getTime();
      let currentTime = new Date().getTime();

      if ((eventTime >= currentTime) && ref.place != null) {
        if ((ref.place.name.indexOf(newLocation) >= 0)) {
          events.push(ref);
        }
        if (ref.place.location){
          if ((ref.place.location.city.indexOf(newLocation) >= 0)) {
              events.push(ref);
          }
        }

      }
        this.setState({events: events})

    })
    console.log(events)
  }

  componentDidMount() {
    newLocation = userLocation();
  }


  render() {
      return (
        <div>
          <div class = "local">
            <h1 id = "localTitle">Local Events</h1>
            <h2 id = "open">Found events in {newLocation}</h2>
            <div className = "create-cards-container">
            {this.state.events.map( (event) => (
            <ViewCard event={event} key={event.id} />
            ))}
            </div>
          </div>
          <div class = "custom">
            {/*<h1 id= "customEvents">Events For You</h1>*/}

          </div>
        </div>

      )
  }
}

export default Events;
