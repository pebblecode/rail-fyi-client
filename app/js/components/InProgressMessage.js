'use strict';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import message from '../lib/message';

class InProgressMessage extends Component {
  render() {
    const { station, subject, description } = this.props;
    const messageParts =
      message.buildInProgressMessageParts(station, subject, description)
        .map((p, idx) => {
          switch (p.type) {
            case 'ellipsis':
              return <span className="ellipsis" key={idx}>&hellip;</span>;
            case 'plain':
              return <span key={idx}>{p.text}</span>;
            default:
              return <Link className='btn btn-line' to={'/select-' + p.type} key={idx}>{p.text}</Link>;
          }
        });
    return (
      <div className="message-container">
        {messageParts}
      </div>
    );
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
