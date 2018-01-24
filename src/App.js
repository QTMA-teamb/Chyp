import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header.js"
import Events from "./components/Events/Events.js"
import Create from "./components/Create/Create.js"
import About from "./components/About/About.js"
import FacebookAuth from 'react-facebook-auth'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import fire from './fire.js';

const MyFacebookButton = ({ onClick }) => (
  <button id = "btnLogin" type= "submit" onClick={onClick} >
    Continue With Facebook
  </button>
);

let username = 'Login With Facebook!'
const total = []
const allEvents = []
let user_location
let accessToken
let now = new Date()

const authenticate = (response) => {

  fire.database().ref('users/'+response.id).set(response);

  console.log(response)
  if (response.accessToken) {
    username = 'Thanks for logging in '+ response.first_name +'!';
    accessToken = response.accessToken;

    if (response.location)
      user_location = response.location.name ? response.location.name : null;

    if (response.events) {
      response.events.data.forEach( event => {

        let eventTime = new Date(event.end_time).getTime();
        let n = new Date().getTime();

        if (event.is_viewer_admin !== false) {
          total.push(event);
        } else if (event.end_time && (eventTime >= n)) {
          allEvents.push(event)
        }

      })
    }

  console.log(total)
  console.log(allEvents)
}

  document.getElementById('lblLogin').innerHTML = username;
  document.getElementById('btnLogin').style.display = 'none';
}


class App extends Component {


  render() {
    return (
      <Router>
        <div classhost="App">

        <Header />
        <main>
          <Route exact path="/" render={() => (
            <div id="main" class='content'>
              <h1><span>Welcome To Chyp</span></h1>
              <h2>Chyp lets you collect payments for a<br></br> conference, party, or any other event in a click</h2>
              <h3 id= 'lblLogin'>{username}</h3>

              <div data-width="200" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="true">
                { accessToken ? null :
                  <FacebookAuth
                      appId="360886547672323"
                      callback={authenticate}
                      component={MyFacebookButton}
                      scope="public_profile,email,user_events,user_location"
                      fields="name,first_name,location,last_name,email,picture,events{is_viewer_admin,start_time,place,cover,description,name,end_time}"/>
                }
              </div>

          </div>

        )}/>
          </main>
          <Route exact path="/events" render={(props) => (
            <Events {...props} userlocation = {user_location} token = {accessToken} all_Events = {allEvents} /> )}/>

            <Route exact path="/about" render={(props) => (
              <About {...props} /> )}/>

            <Route exact path= "/create" render={(props) => (
              <Create {...props} token={accessToken} total={total}/> )}/>
        </div>
      </Router>
    );
  }
}


export default App;
