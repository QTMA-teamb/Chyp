import React, { Component } from 'react';
import firebase from '../../fire.js';
import { withRouter } from 'react-router';
import query_string from 'query-string';
import axios from 'axios';

class StripeComplete extends Component {

  constructor(props) {
    super(props);
    // https://chyp.ca/stripe-complete?scope=read_write&code=ac_CULLK0cjGPknlS3Ul8fv2X9nm3ygEsiI
    const qs = query_string.parse(this.props.location.search);
    console.log(qs);
    if (qs.error) {
      console.log('stripe declined')
    } else {
      firebase.database().ref('users/' + qs.state + '/stripe_creds/access_token').set(qs.code);
    }
  }

  render() {
      return (
        <div></div>
      );
  }

}

export default withRouter(StripeComplete);
