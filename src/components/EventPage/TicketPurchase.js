import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Elements } from 'react-stripe-elements';
import fire from '../../fire.js';
import firebase from 'firebase';

import CheckoutForm from './CheckoutForm';

export class TicketPurchase extends Component {

  constructor(props) {
    super(props);
    fire.auth().onAuthStateChanged( user => {
      this.setState({ logged_in: user ? true : false });
    })
  }

  onLoginClick() {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope("public_profile")
    provider.addScope('email')
    provider.addScope('user_events')
    provider.addScope('user_location')
    provider.addScope('user_friends')
    fire.auth().signInWithPopup(provider).then((result) => {
      fire.database().ref('users/' + result.user.uid).update({
        access_token: result.credential.accessToken,
        email: result.user.email,
        name: result.user.displayName,
        picture: result.user.photoURL,
        uid: result.user.uid,
        fb_id: result.additionalUserInfo.profile.id
      })
    });
  }

  render() {
    console.log(fire.auth().currentUser)
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
                    <img src={fire.auth().currentUser.photoURL} />
                    <div>
                      <p>{fire.auth().currentUser.displayName}</p>
                      <p>{fire.auth().currentUser.email}</p>
                    </div>
                    <Button color='primary' onClick={ () => {fire.auth().signOut()} }>{'Not You?'}</Button>
                  </div>
                ) : (
                  <Button color='primary' id='login-btn' onClick={this.onLoginClick}>{'Connect with Facebook to Continue'}</Button>
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
