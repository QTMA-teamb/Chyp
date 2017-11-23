import React, { Component } from 'react';
import './Create.css';
import '../../App.js'



class Card extends Component {

componentDidMount(){
  if (!this.props.token){
    window.location.href = "../";
    alert('Please Login With Facebook to Continue!')

  }
}

  render() {
    return (

      <div class="blog-card spring-fever">
        <img class = "cover-photo" src = {this.props.cover[0]} height = '210' width = '400' alt = "Cover Photo"/>
        <div class="title-content">
          <h3><a href="#">{this.props.name[0]}</a></h3>
            <div class="intro">
            <a>{this.props.location[0]}</a><br></br>
            <a>{this.props.id [0]}</a>
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
