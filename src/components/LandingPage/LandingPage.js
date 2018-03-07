import React, { Component } from 'react';

import './LandingPage.css';

export default class LandingPage extends React.Component {

  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(evt) {
    window.alert('Button was clicked');
  }

  render() {
    return (
      <div className='container' id='landing-page'>
        <div className='row'>
          <div className='col-12 col-md-6' id='text-col'>
            <h1>{'Chyp'}</h1>
            <h2>{'Painlessly collect payments for your events.'}</h2>
            <div role='button' onClick={this.buttonClick}>{'Start Here'}</div>
          </div>
          <div className='col-12 col-md-6' id='phone-col'>
            <img src={require('./Iphone.png')} alt='Iphone' id='Iphone'/>
          </div>
        </div>
      </div>
    );
  }
}
