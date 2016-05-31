'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setStage } from '../actions/stage';

class Faq extends Component {
  componentWillMount() {
    // don't render the progress bar
    this.props.dispatch(setStage(0));
  }

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

export default connect()(Faq);
