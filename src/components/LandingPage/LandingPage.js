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
<<<<<<< HEAD
            <img src={require('./Iphone.png')} alt='Iphone' id='Iphone'/>
=======
            <img src={require('./iphone.jpg')} alt='iPhne' id='iPhone'/>
>>>>>>> 13bce3cdca2c96a889d52b247a60e613cea6b8bb
          </div>
        </div>
      </div>
    );
  }
}
