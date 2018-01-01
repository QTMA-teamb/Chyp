import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header.js"
import Events from "./components/Events/Events.js"
import Create from "./components/Create/Create.js"
import About from "./components/About/About.js"
import FacebookAuth from 'react-facebook-auth';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const MyFacebookButton = ({ onClick }) => (
  <button id = "btnLogin" type= "submit" onClick={onClick} >
    Continue With Facebook
  </button>
);

let username = 'Login With Facebook!'
const total = []
let user_location
let accessToken

const authenticate = (response) => {
  console.log(response);
  if (response.accessToken){
    username = 'Thanks for logging in '+ response.first_name +'!';
    accessToken = response.accessToken;

    if (response.location.name){
      user_location = response.location.name;

    }
    console.log(user_location);


    var i = 0;
    if (response.events){
      for (i = 0; i < response.events.data.length; i++){
        if (response.events.data[i].is_viewer_admin != false)
          {
            if (response.events.data[i].cover && response.events.data[i].place){
                if (response.events.data[i].place.location){
                  total.push({name: response.events.data[i].name, street: response.events.data[i].place.location.street, location: response.events.data[i].place.name, cover: response.events.data[i].cover.source, id: response.events.data[i].id})
                }
                else{
                  total.push({name: response.events.data[i].name, street: "Not Stated", location: "Not Stated", cover: response.events.data[i].cover.source, id: response.events.data[i].id})
                }
            }
            else if (response.events.data[i].cover && !response.events.data[i].place){
                total.push({name: response.events.data[i].name, street: "Not Stated", location: "Not Stated", cover: response.events.data[i].cover.source, id: response.events.data[i].id})
              }
            else if (!response.events.data[i].cover && response.events.data[i].place){
                  total.push({name: response.events.data[i].name, street: response.events.data[i].place.location.street, location: response.events.data[i].place.name, cover: "https://x.kinja-static.com/assets/images/logos/placeholders/default.png", id: response.events.data[i].id})
                }
            else if (!response.events.data[i].cover && !response.events.data[i].place){
                    total.push({name: response.events.data[i].name, street: "Not Stated", location: "Not Stated", cover: "https://x.kinja-static.com/assets/images/logos/placeholders/default.png", id: response.events.data[i].id})
                }
          }
      }

  console.log(total)
}

  document.getElementById('lblLogin').innerHTML =
   username;
  document.getElementById('btnLogin').style.display = 'none';
  //call function in node function ()
}
  // Api call to server so we can validate the token
};



class App extends Component {

  render() {
    return (
      <Router>
        <div classhost="App">

        <Header />
        <main>
          <Route exact path="/" render={() => (
            <div id = "mainn" class = 'content'>
              <h1><span>Welcome To Chyp</span></h1>
              <h2>Chyp lets you collect payments for a<br></br> conference, party, or any other event in a click</h2>
              <h3 id= 'lblLogin'>{username}</h3>

              <div data-width="200" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="true">

                <FacebookAuth
                    appId="360886547672323"
                    callback={authenticate}
                    component={MyFacebookButton}
                    scope="public_profile,email,user_events,user_location"
                    fields="name,first_name,location,last_name,email,picture,events{is_viewer_admin,start_time,place,cover,description,name}"/>
              </div>

          </div>

        )}/>
          </main>
          <Route exact path="/events" render={(props) => (
            <Events {...props} userlocation = {user_location} token = {accessToken} /> )}/>

            <Route exact path="/about" render={(props) => (
              <About {...props} /> )}/>

            <Route exact path= "/create" render={(props) => (
              <Create {...props} token = {accessToken} total = {total}/> )}/>
        </div>
      </Router>
    );
  }
}


export default App;
