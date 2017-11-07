import React, { Component } from 'react';
import logo from './logoDark.png';
import './App.css';
import Header from "./components/Header/Header.js"
import Home from "./components/Home/Home.js"
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <div classhost="App">
        <Header />
        <main>
          <Route exact path="/" render={() => (
            <div class = 'content'>
              <h1>Welcome To Chyp</h1>
              <h2>Chyp lets you collect payments for a conference, party, or any other event in a click</h2>
              <h3 id= 'lblLogin'>Login With Facebook!</h3>
              <div id = "btnLogin" class="fb-login-button" data-width="200" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="true" onlogin="checkLoginState();"></div>
            </div>
          )}/>
          <Route exact path="/events" component={Home}/>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
