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
  <button onClick={onClick}>
    Login with facebook
  </button>
);
const authenticate = (response) => {
  console.log(response);
  console.log(response.first_name)
  console.log(response.last_name)
  console.log(response.email)
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
              <h1>Welcome To Chyp</h1>
              <h2>Chyp lets you collect payments for a conference, party, or any other event in a click</h2>
              <h3 id= 'lblLogin'>Login With Facebook!</h3>
              <div id = "btnLogin" class="fb-login-button" data-width="200" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="true" onlogin="checkLoginState();"></div>
              <FacebookAuth
                    appId="360886547672323"
                    callback={authenticate}
                    component={MyFacebookButton}
                    scope="public_profile,user_friends,user_events"
                    fields="first_name,last_name,email,picture"
                  />

            </div>
          )}/>
          </main>
          <Route exact path="/events" component={Home}/>
          <Route exact path="/createe" component={Create}/>

        </div>
      </Router>
    );
  }
}


export default App;
