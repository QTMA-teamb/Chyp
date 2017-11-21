import React, { Component } from 'react';
import ReactDOM from "react-dom"
import './Create.css';
import '../../App.js'
//
var i =0;


class Card extends Component {

  render() {



    return (

      <div class="blog-card spring-fever">
        <img class = "cover-photo" src = {this.props.cover[0]} height = '210' width = '400'/>
        <div class="title-content">

          <h3><a href="#">{this.props.name[0]}</a></h3>
            <div class="intro">
            <a>{this.props.location[0]}</a><br></br>
            <a>{this.props.id}</a>
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
