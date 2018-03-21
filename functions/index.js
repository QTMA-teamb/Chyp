const functions = require('firebase-functions');
var axios = require('axios');


exports.stripeConfirm = functions.database.ref('users/{uid}/stripe_creds/access_token').onCreate( event => {
     console.log(event.data.val());
  return axios.post('https://connect.stripe.com/oauth/token', {
    client_secret:'sk_test_1Cv6nBVNv76yYsbcECLddaYT',
    code: event.data.val(),
    grant_type:'authorization_code'
  }).then( res => {
    event.data.ref.parent.child("account").update(res.data);
      
  })
    .catch(err =>
           console.error(err)
    );
    
});
