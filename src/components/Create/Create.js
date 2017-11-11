import React, { Component } from 'react';
import './Create.css';

class Card extends Component {

  render() {
    return (
      <div classhost="card">
        <img src="img_avatar.png" alt="Avatar" style="width:100%"/>
          <div classhost="container">
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
    );
  }
}

export default Card;
