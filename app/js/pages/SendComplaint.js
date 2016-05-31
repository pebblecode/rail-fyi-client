'use strict';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { setStage } from '../actions/stage';
import InProgressMessage from '../components/InProgressMessage';
import SendButtons from '../components/SendButtons';
import stationList from '../data/station-list';
import config from '../config';
import message from '../lib/message';

class SendComplaint extends Component {
  componentWillMount() {
    this.props.dispatch(setStage(4));
  }

  _buildMessage() {
    let emailEndpoint = '';
    let tweetEndpoint = '';
    const { station, subject, description } = this.props;

    const filteredStations =
      stationList.filter(s => s.name === station);

    if (!filteredStations.length) return { emailEndpoint, tweetEndpoint };

    const stationOperatorCode = filteredStations[0].stationOperator;
    const stationOperator =
      config.stationOperators.filter(o => o.code === stationOperatorCode)[0];

    const emailSubject =
      station +
      ' - ' +
      subject +
      ' - ' +
      'complaint!';

    const emailSignature =
      'This complaint was built with ' +
      'Rail FYI: http://www.rail.fyi';

    const finalMessage =
      message
        .buildInProgressMessageParts(station, subject, description)
        .map(p => p.text)
        .join(' ');
    emailEndpoint =
      stationOperator.email
      ? 'mailto:'
          + stationOperator.email
          + '?subject='
          + encodeURI(emailSubject)
          + '&body='
          + encodeURI(finalMessage)
          + '%0D%0A%0D%0A' // double break line
          + encodeURI(emailSignature)
      : null;
    tweetEndpoint =
      stationOperator.twitter
      ? 'http://twitter.com/home/?status='
          + stationOperator.twitter
          + ' '
          + finalMessage
          + ' via %23RailFYI'
      : null;

    return { emailEndpoint, tweetEndpoint };
  }

  render() {
    const { emailEndpoint, tweetEndpoint } = this._buildMessage();

    return (
      <section className="select-complaint">
        <div className="content-container">
          <p>Here is your message.</p>
          <InProgressMessage />
        </div>
        <div className="bottom-container">
          <p>Ready? Choose your weapon</p>
          <SendButtons tweetEndpoint={tweetEndpoint} emailEndpoint={emailEndpoint} />
        </div>
      </section>
    );
  }
}

SendComplaint.propTypes = {
  station: PropTypes.string,
  subject: PropTypes.string,
  description: PropTypes.string,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    station: state.form.wizard.station.value,
    subject: state.form.wizard.subject.value,
    description: state.form.wizard.description.value
  };
};

export default connect(mapStateToProps)(SendComplaint);
