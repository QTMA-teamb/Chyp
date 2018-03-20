import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./popUp.css"
import fire from '../../fire.js';
import { withRouter } from 'react-router';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupAddon, Input } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      submitted: false,
      price: 0,
      stage: 'price'
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
      this.setState({
        stage: 'stripe'
      })
    });
  }

  render() {

    return (
      <div>
        <Button id = "Create" className="initButton" onClick={this.toggle}>Add To Chyp!</Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{'Set a Ticket Price for this Event!'}</ModalHeader>
          <ModalBody id = "information">

             { this.state.stage === 'price'
              ? <InputGroup>
                  <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                  <Input type="number" step="1" onChange={this.handleChange} placeholder="Ticket Price" />
                  <InputGroupAddon addonType="append">.00</InputGroupAddon>
                </InputGroup>

              : <a href={"https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_CRiyeuFWnWEukuvXDGVIDP7ggGdMbm5r&scope=read_write&state=" + fire.auth().currentUser.uid} className="stripe-connect"><span>{'Connect with Stripe'}</span></a>
             }

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
