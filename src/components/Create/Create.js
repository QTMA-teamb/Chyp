import React, { Component } from 'react';
import './Create.css';

class Card extends Component {

  render() {
    return (
      <div class="blog-card spring-fever">
        <div class="title-content">
          <h3><a href="#">Name of Event (On Click Takes Them To Facebook?)</a></h3>
            <div class="intro"> <a>Date</a> </div>
        </div>
      <div class="card-info">
      Description of the event would go here Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim...
        <a href="#">Add To Chyp!<span class="licon icon-arr icon-black"></span></a>
      </div>
    // <div class="gradient-overlay"></div>
    // <div class="color-overlay"></div>
  </div>
    );
  }
}

export default Card;
