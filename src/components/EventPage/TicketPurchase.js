import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Elements } from 'react-stripe-elements';
import fire from '../../fire.js';

import CheckoutForm from './CheckoutForm';

export class TicketPurchase extends Component {

  constructor(props) {
    super(props);
    fire.auth().onAuthStateChanged( user => {
      this.setState({ logged_in: user ? true : false });
    })
  }

  render() {
    if (!this.state) {
      return null
    } else {
      return (
        <Modal isOpen={this.props.modalOpen} toggle={this.props.toggleModal} id='checkout-modal'>
          <ModalHeader>{'Purchase Your Ticket'}</ModalHeader>
          <ModalBody>
            <div id='purchaser-container'>
              <h6>{'CONFIRM YOUR PROFILE'}</h6>
                {this.state.logged_in ? (
                  <div id='purchaser'>
                    <p>{'A receipt will be sent to ' + fire.auth().currentUser.displayName}</p>
                    <Button color='primary' onClick={ () => {fire.auth().signOut()} }>{'Not You?'}</Button>
                  </div>
                ) : (
                  <Button color='primary'>{'Log In'}</Button>
                )}
            </div>
            <div className='form-divider'></div>
            <h6>{'YOUR PAYMENT DETAILS'}</h6>
            <Elements>
              <CheckoutForm disabled={!this.state.logged_in}/>
            </Elements>
          </ModalBody>
        </Modal>
      )
    }
  }

}

export default TicketPurchase;
