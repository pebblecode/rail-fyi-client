'use strict';

import React, { Component } from 'react';

class Faq extends Component {
  render() {
    return (
      <div className="faq-container">
        <h3>What is this?</h3>
        <p>A site where you can give feedback on stations in the UK</p>
        <h3>How do I use this?</h3>
        <p>Follow the steps to generate a tweet or an email at the end to notify the appropriate rail operator</p>
        <h3>Are you associated with any rail operator?</h3>
        <p>No, we are independent from any rail operators</p>
        <h3>Who made this?</h3>
        <p>
          We made it at <a href="http://www.pebblecode.com">pebble {'{'}code{'}'}</a> in a one week hack
        </p>
      </div>
    );
  }
}

export default Faq;
