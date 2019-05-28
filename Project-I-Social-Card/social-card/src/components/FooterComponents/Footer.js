// Footer start here
import React from 'react';
// import './Header.css';

function FooterBuilder () {
    return (
      <footer>
        <div className="icon-countainer">
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i><span className="count-tweet">6</span>
          <i className="far fa-heart"></i><span>4</span>
        </div>
      </footer>
    );
  }



  export default FooterBuilder;