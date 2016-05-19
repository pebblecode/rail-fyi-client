'use strict';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ProgressBar from '../components/ProgressBar';
import InProgressMessage from '../components/InProgressMessage';
import stationList from '../data/station-list';
import config from '../config';

class SendComplaint extends Component {
  render() {
    const { station, message } = this.props;
    const stationOperatorCode =
      stationList.filter(s => s.name === station)[0].stationOperator;
    const stationOperator =
      config.stationOperators.filter(o => o.code === stationOperatorCode)[0];
    const tweet = stationOperator.twitter + ' ' + message;
    return (
      <section className="select-complaint">
        <ProgressBar stage={4} />
        <div>Here is your message.</div>
        <div>Anything else you'd like to add?</div>
        <InProgressMessage />
        Ready? Choose your method of weapon below.
        <button>Send email</button>
        <a href={"http://twitter.com/home/?status=" + tweet}>
          Tweet
        </a>
      </section>
    );
  }
}

SendComplaint.propTypes = {
  message: PropTypes.string,
  station: PropTypes.string
};

const mapStateToProps = state => {
  // TODO: Get this from the state
  return {
    message: "At Vauxhall the toilet is dirty",
    station: "Vauxhall"
  };
};

export default connect(mapStateToProps)(SendComplaint);
