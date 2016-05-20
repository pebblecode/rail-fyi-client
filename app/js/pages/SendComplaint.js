'use strict';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import ProgressBar from '../components/ProgressBar';
import InProgressMessage from '../components/InProgressMessage';
import SendButtons from '../components/SendButtons';
import stationList from '../data/station-list';
import config from '../config';
import message from '../lib/message';

class SendComplaint extends Component {
  _buildMessage() {
    const { station, subject, description } = this.props;

    const stationOperatorCode =
      stationList.filter(s => s.name === station)[0].stationOperator;
    const stationOperator =
      config.stationOperators.filter(o => o.code === stationOperatorCode)[0];
    const finalMessage = message.buildFinalMessageString(station, subject, description);
    const emailEndpoint =
      stationOperator.email
      ? "mailto:"
          + stationOperator.email
          + "?body="
          + encodeURI(finalMessage)
      : null;
    const tweetEndpoint =
      stationOperator.twitter
      ? "http://twitter.com/home/?status="
          + stationOperator.twitter
          + " "
          + finalMessage
      : null;

    return { emailEndpoint, tweetEndpoint };
  }

  render() {
    const { emailEndpoint, tweetEndpoint } = this._buildMessage();

    return (
      <section className="select-complaint">
        <ProgressBar stage={4} />
        <div>Here is your message.</div>
        <div>Anything else you'd like to add?</div>
        <InProgressMessage />
        Ready? Choose your method of weapon below.
        <SendButtons tweetEndpoint={tweetEndpoint} emailEndpoint={emailEndpoint} />
      </section>
    );
  }
}

SendComplaint.propTypes = {
  message: PropTypes.string,
  station: PropTypes.string
};

const mapStateToProps = state => {
  return {
    station: state.form.wizard.station.value,
    subject: state.form.wizard.subject.value,
    description: state.form.wizard.description.value
  };
};

export default connect(mapStateToProps)(SendComplaint);
