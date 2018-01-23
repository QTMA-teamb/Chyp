import React, { Component } from 'react';
import PopUp from '../PopUp/popUp.js'
import './Create.css';
import withRouter from 'react-router'

class CreateCard extends Component {

  handleClick(){
    <PopUp />
  }

  render() {
    let myURL = "https://www.facebook.com/events/"+this.props.event.id+"/"
    return (
      <div class="block-card">
        <img class = "cover-photo" key = {this.props.event.id + 'cover'} src = {this.props.event.cover} height = '210' width = '400' alt = "Cover Photo"/>
          <div class="title-content">
            <h3><a href= {myURL} key = {this.props.event.id}>{this.props.event.name}</a></h3>

              <div class="intro">
                <a href = '#'key = {this.props.event.id}>{this.props.event.location}</a><br></br>
                <a key = {this.props.event.id}>{this.props.event.street}</a><br></br>
                <a key = {this.props.event.id}>{this.props.event.end_time}</a>
              </div>
              <div class="card-info">
                <PopUp event={this.props.event} />
              </div>
          </div>

      </div>
    );
  }

}

export default CreateCard;
