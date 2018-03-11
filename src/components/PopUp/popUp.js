import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./popUp.css"
import fire from '../../fire.js';
import { withRouter } from 'react-router';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      submitted: false,
      price: 0,
      cardNumber:0,
      expiry:0,
      ccv:0
    };

    this.toggle = this.toggle.bind(this);
    this.submitEvent = this.submitEvent.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleChange(event) {
    this.setState({
      price: event.target.value
    });
  }

  submitEvent() {
    let event_data = this.props.event;
    event_data.price = this.state.price;
    const newRef = fire.database().ref('events/' + this.props.event.id).set(event_data).then( () => {
      this.props.history.push('/event?id=' + this.props.event.id);
    });
  }

  render() {
    return (
      <div>
        <Button id = "Create" className="initButton" onClick={this.toggle}>Add To Chyp!</Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Set a Ticket Price for this Event!</ModalHeader>
          <ModalBody id = "information">
             <input type='number' step='0.01' onChange={this.handleChange} placeholder="Ticket Price"></input><br></br>
              <input id = "cardNumber" type='number' placeholder="Card Number" onChange={this.handleChange}></input><br></br>
               <input id = "expiry" type='number'  placeholder="Expiry (MM/YYYY)" onChange={this.handleChange}></input><br></br>
                <input id = "ccv" type='number' placeholder="CCV" onChange={this.handleChange}></input>

          </ModalBody>
          { this.state.submitted ? null :
            <ModalFooter>
              <Button style={{ backgroundColor: "#00CC89" }} onClick={this.submitEvent}>Confirm and Add to Chyp</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Back to Events</Button>
            </ModalFooter>
          }
        </Modal>
      </div>
    );
  }
}

export default withRouter(ModalExample);
