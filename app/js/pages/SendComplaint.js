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
    const tweet =
      stationOperator.twitter
        + ' '
        + message.buildFinalMessageString(station, subject, description);

    return tweet;
  }
  _onTweetClick() {
    console.log('do the twitter stuff here');
  }

  _onEmailClick() {
    console.log('do the email stuff here');
  }

  render() {
    const tweet = this._buildMessage();

    return (
      <section className="select-complaint">
        <ProgressBar stage={4} />
        <p>Here is your message.</p>
        <p>Anything else you'd like to add?</p>
        <InProgressMessage />
        <p>Ready? Choose your method of weapon below.</p>
        <SendButtons onTweetClick={this._onTweetClick} onEmailClick={this._onEmailClick} />
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
