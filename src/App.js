import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from "./components/Header/Header.js"
import Home from "./components/Events/Events.js"
import Create from "./components/Create/Create.js"
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
var username = 'Click To Login With Facebook!'


const authenticate = (response) => {
  if (response.status != "not_authorized"){
  console.log(response);
  username = 'Thanks for logging in '+ response.first_name +'!';
  console.log(username)
  console.log(response.last_name)
  console.log(response.email)
  console.log(response.accessToken)
  console.log(response.userID)
  console.log(response.events)


  document.getElementById('lblLogin').innerHTML =
    'Thanks for logging in, ' + response.first_name + '!';
  document.getElementById('btnLogin').style.display = 'none';
  //call function in node function ()
}

  // Api call to server so we can validate the token
};

if (username != 'Login With Facebook!'){
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
            <div id = "mainn" class = 'content'>
              <h1>Welcome To Chyp</h1>
              <h2>Chyp lets you collect payments for a conference, party, or any other event in a click</h2>
              <h3 id= 'lblLogin'>{username}</h3>
              <div id = "btnLogin" data-width="200" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="true" onlogin="checkLoginState();">
              <FacebookAuth
                    appId="360886547672323"
                    callback={authenticate}
                    component={MyFacebookButton}
                    scope="public_profile,email,user_events"
                    fields="name,first_name,last_name,email,picture,events"
                    edges = 'events'
              />
                  </div>
            </div>
          )}/>
          </main>
          <Route exact path="/events" component={Home}/>
          <Route exact path="/create" component={Create}/>

        </div>
      </Router>
    );
  }
}


export default App;
