import React, { Component } from 'react';
import './Create.css';
import '../../App.js'



class Card extends Component {

componentDidMount(){
  if (!this.props.token){
    window.location.href = "../";
    alert('Please Login With Facebook to Continue!')
  }
  if (!this.props.total[0]){
    window.location.href = "../";
    alert('You are not an admin to any events!')
  }
}

render() {
    return (
      <div>
        <div>
          <h1>Your Facebook Events</h1>
        </div>
        {this.props.total.map((item, index) => (
          <div class="blog-card spring-fever">
            <img class = "cover-photo" key = {item.id} src = {item.cover} height = '210' width = '400' alt = "Cover Photo"/>
              <div class="title-content">

                <h3><a href="#"  key = {item.id}>{item.name}</a></h3>

                  <div class="intro">
                    <a key = {item.id}>{item.location}</a><br></br>
                    <a key = {item.id}>{item.street}</a>
                  </div>
              </div>
              <div class="card-info">
                <a href="#">Add To Chyp!<span class="licon icon-arr icon-black"></span></a>
              </div>
          </div>
      ))}
    </div>
    );

  }
}

export default Card;
