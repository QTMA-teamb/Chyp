import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Elements } from 'react-stripe-elements';
import fire from '../../fire.js';

import CheckoutForm from './CheckoutForm';

export class TicketPurchase extends Component {

  constructor(props) {
    super(props);
    fire.auth().onAuthStateChanged( user => {
      console.log(user);
      this.setState({ logged_in: user ? true : false });
    })
  }

  render() {
    if (!this.state) {
      return null
    } else {
      return (
        <Modal isOpen={this.props.modalOpen} toggle={this.props.toggleModal}>
          <ModalHeader>{'Purchase Your Ticket'}</ModalHeader>
          <ModalBody>
            {this.state.logged_in ? (
              <div>
                <p>{'A receipt will be sent to ' + fire.auth().currentUser.displayName}</p>
                <Button color='primary' onClick={ () => {fire.auth().signOut()} }>{'Not You?'}</Button>
              </div>
            ) : (
              <Button color='primary'>{'Log In'}</Button>
            )}
            <div className='form-divider'></div>
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
