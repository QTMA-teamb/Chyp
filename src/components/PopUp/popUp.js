import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./popUp.css"
import fire from '../../fire.js';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      submitted: false
    };

    this.toggle = this.toggle.bind(this);
    this.submitEvent = this.submitEvent.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  submitEvent() {
    const newRef = fire.database().ref('events/').push();
    newRef.set(this.props.event);
    this.setState({
      submitted: true,
      event_id: newRef.key
    })
  }

  render() {
    return (
      <div>
        <Button className = "initButton" onClick={this.toggle}>Add To Chyp!</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Set a Ticket Price for this Event!</ModalHeader>
          <ModalBody>
            { this.state.submitted
              ? 'Visit your event page at: www.chyp.ca/event/' + this.state.event_id
              : 'place price input form here'
            }
          </ModalBody>
          { this.state.submitted ? null :
            <ModalFooter>
              <Button color="primary" onClick={this.submitEvent}>Confirm and Add to Chyp</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Back to Events</Button>
            </ModalFooter>
          }
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
