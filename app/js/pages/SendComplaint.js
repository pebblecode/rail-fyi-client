'use strict';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ProgressBar from '../components/ProgressBar';
import InProgressMessage from '../components/InProgressMessage';

class SendComplaint extends Component {
  render() {
    const { message } = this.props;
    return (
      <section className="select-complaint">
        <ProgressBar stage={4} />
        <div>Here is your message.</div>
        <div>Anything else you'd like to add?</div>
        <InProgressMessage />
        Ready? Choose your method of weapon below.
        <button>Send email</button>
        <a href={"http://twitter.com/home/?status=" + message}>
          Tweet
        </a>
      </section>
    );
  }
}

SendComplaint.propTypes = {
  message: PropTypes.string
};

const mapStateToProps = state => {
  return {
    message: "At Vauxhall the toilet is dirty" // TODO: Get this from the state
  };
};

export default connect(mapStateToProps)(SendComplaint);
