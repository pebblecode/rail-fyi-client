'use strict';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import message from '../lib/message';

class InProgressMessage extends Component {
  render() {
    const { station, subject, description } = this.props;
    return message.buildInProgressMessage(station, subject, description);
  }
}

InProgressMessage.propTypes = {
  station: PropTypes.string,
  subject: PropTypes.string,
  description: PropTypes.string
};

const mapStateToProps = state => {
  let station;
  let subject;
  let description;

  if (state.form && state.form.wizard) {
    if (state.form.wizard.station) {
      station = state.form.wizard.station.value;
    }

    if (state.form.wizard.subject) {
      subject = state.form.wizard.subject.value;
    }

    if (state.form.wizard.description) {
      description = state.form.wizard.description.value;
    }
  }

  return {
    station,
    subject,
    description
  };
};

export default connect(mapStateToProps)(InProgressMessage);
