import React, { Component } from 'react';

class CreateCard extends Component {

  render() {
    return (
      <div class="block-card">
        <img class = "cover-photo" key = {this.props.event.id + 'cover'} src = {this.props.event.cover} height = '210' width = '400' alt = "Cover Photo"/>
          <div class="title-content">
            <h3><a href="#"  key = {this.props.event.id}>{this.props.event.name}</a></h3>

              <div class="intro">
                <a key = {this.props.event.id}>{this.props.event.location}</a><br></br>
                <a key = {this.props.event.id}>{this.props.event.street}</a>
              </div>
          </div>
          <div class="card-info">
            <a href="#">Add To Chyp!<span class="licon icon-arr icon-black"></span></a>
          </div>
      </div>
    );
  }

}

export default CreateCard;
