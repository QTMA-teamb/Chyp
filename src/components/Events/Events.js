import React, { Component } from 'react';
import './Events.css';
import axios from 'axios';
import CreateCard from '../Create/CreateCard';
import firebase from '../../fire.js';

var newLocation;
const events = [];

function userLocation(){
  var location = prompt("Please enter your location:", "Your Location");
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

componentWillMount(){
  var recents = firebase.database().ref('events').orderByKey().limitToLast(15);
  recents.on('child_added', function(snapshot) {
    var ref = snapshot.val()
      events.push(ref);
  });
  console.log(events)
}
  componentDidMount() {

  newLocation = this.props.userlocation;
  if (!this.props.token) {
    window.location.href = "../";
    alert('Please Login With Facebook to Continue!')
    return
  } else if (!this.props.userlocation) {
    newLocation = userLocation();
  }
  console.log(newLocation);
  document.getElementById("open").innerHTML = "Looking for events in " + newLocation;

}


  render() {
      return (
        <div>
          <div class = "local">
            <h1 id = "localTitle">Local Events</h1>
            <h2 id = "open">{newLocation}</h2>
            <div className = "Card">
            {events.map( (event) => (
            <CreateCard event={event} key={event.id} />
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
