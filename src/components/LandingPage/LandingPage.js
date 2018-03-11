import React, { Component } from 'react';

import './LandingPage.css';

export default class LandingPage extends React.Component {

  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(evt) {
    document.getElementById('btnLogin').click()
  }

  render() {
    return (
      <div className='container' id='landing-page'>
        <div className='row'>
          <div className='col-12 col-md-6' id='text-col'>
            <h1>{'Chyp'}</h1>
            <h2>{'Painlessly collect payments for your events.'}</h2>
            <h3 id = 'lblLogin'>{'Login with Facebook'}</h3>
            <div role='button' id = "btnStart" onClick={this.buttonClick}>{'Start Here'}</div>
          </div>
          <div className='col-12 col-md-6' id='phone-col'>
            <img src={require('./iphone.jpg')} alt='iPhone' id='iPhone'/>
          </div>
        </div>
      </div>
    );
  }
}
