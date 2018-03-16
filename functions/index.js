const functions = require('firebase-functions');
var axios = require('axios');

exports.stripeConfirm = functions.database.ref('users/{uid}/stripe_creds/access_token').onCreate( event => {
  return axios.post('https://connect.stripe.com/oauth/token', {
    client_secret:'sk_test_1Cv6nBVNv76yYsbcECLddaYT',
    code: event.data.val(),
    grant_type:'authorization_code'
  }).then( res => {
    event.data.ref.update(res.data);
  })
});
