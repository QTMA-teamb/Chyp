import React, { Component } from 'react';
import './Create.css';
import '../../App.js'
//
// window.fbAsyncInit = function() {
//   FB.init({
//     appId            : '360886547672323',
//     autoLogAppEvents : true,
//     xfbml            : true,
//     version          : 'v2.11'
//   });
// };
//
// (function(d, s, id){
//    var js, fjs = d.getElementsByTagName(s)[0];
//    if (d.getElementById(id)) {return;}
//    js = d.createElement(s); js.id = id;
//    js.src = "https://connect.facebook.net/en_US/sdk.js";
//    fjs.parentNode.insertBefore(js, fjs);
//  }(document, 'script', 'facebook-jssdk'));


class Card extends Component {

  render() {
    return (
      <div class="blog-card spring-fever">
        <div class="title-content">
          <h3><a href="#">Career Fair</a></h3>
            <div class="intro">
            <a>September 20, 2017</a><br></br>
            <a>Grant Hall</a>
            </div>
        </div>
      <div class="card-info">
        <a href="#">Add To Chyp!<span class="licon icon-arr icon-black"></span></a>
      </div>
  </div>
    );
  }
}

export default Card;
