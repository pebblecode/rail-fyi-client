'use strict';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { setStage } from '../actions/stage';
import InProgressMessage from '../components/InProgressMessage';
import SendButtons from '../components/SendButtons';
import stationList from '../data/station-list';
import config from '../config';
import message from '../lib/message';

class SendComplaint extends Component {
  constructor(props) {
    super(props);
    props.dispatch(setStage(4));
  }
  _buildMessage() {
    const { station, subject, description } = this.props;

    const stationOperatorCode =
      stationList.filter(s => s.name === station)[0].stationOperator;
    const stationOperator =
      config.stationOperators.filter(o => o.code === stationOperatorCode)[0];
    const finalMessage =
      message
        .buildInProgressMessageParts(station, subject, description)
        .map(p => p.text)
        .join(' ');
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
        <p>Here is your message.</p>
        <InProgressMessage />
        <div className="bottom-container">
          <div className="center-dis">
            <p>Ready? Choose your weapon</p>
          </div>
          <SendButtons tweetEndpoint={tweetEndpoint} emailEndpoint={emailEndpoint} />
        </div>
      </section>
    );
  }
}

SendComplaint.propTypes = {
  station: PropTypes.string,
  subject: PropTypes.string,
  description: PropTypes.string
};

const mapStateToProps = state => {
  return {
    station: state.form.wizard.station.value,
    subject: state.form.wizard.subject.value,
    description: state.form.wizard.description.value
  };
};

export default connect(mapStateToProps)(SendComplaint);
