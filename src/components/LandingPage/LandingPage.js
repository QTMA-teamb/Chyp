import React, { Component } from 'react';

import './LandingPage.css';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className='container' id='landing-page'>
        <div className='row'>
          <div className='col-12 col-md-6' id='text-col'>
            <h1>Chyp</h1>
            <h2>Painlessly collect payments for your events.</h2>
          </div>
          <div className='col-12 col-md-6' id='phone-col'>
            iPhone
          </div>
        </div>
      </div>
    );
  }
}
