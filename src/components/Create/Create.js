import React, { Component } from 'react';
import './Create.css';

class Card extends Component {

  render() {
    return (
      <div class="blog-card spring-fever">
        <div class="title-content">
          <h3><a href="#">Career Fair</a></h3>
            <div class="intro">
            <a>September 20, 2017</a><br></br>
            <a>Grant Hall</a>
            </div>
        </div>
      <div class="card-info">
        <a href="#">Add To Chyp!<span class="licon icon-arr icon-black"></span></a>
      </div>
  </div>
    );
  }
}

export default Card;
