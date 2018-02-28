import React, { Component } from 'react';
import './Create.css';
import '../../App.js'
import CreateCard from './CreateCard';

class Create extends Component {

componentDidMount(){
  if (!this.props.token){
    window.location.href = "../";
    alert('Please Login With Facebook to Continue!')
    return
  }
  if (!this.props.total[0]){
    window.location.href = "../";
    alert('You are not an admin to any events!')
    return
  }
}


  render() {
    return (
      <div>
        <h1 id="title">Choose an Event to Set Up on Chyp</h1>
        {/*<h1>Or</h1>
        <button className="create">Create Your Own!</button>*/}

        <div className='create-cards-container'>
          {this.props.total.map( (event) => (
          <CreateCard event={event} key={event.id} />
          ))}
        </div>
      </div>
    );
  }

}

export default Create;
