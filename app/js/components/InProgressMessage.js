'use strict';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class InProgressMessage extends Component {
  // TODO: Need to be more intelligent with building the message - sometimes they'll have to be structured a little differently
  // TODO: When clicking the Links this needs to also remove elements from the state as appropriate
  render() {
    const { station, subject, description } = this.props;
    if (!station) {
      return <div>..</div>;
    }
    const stationLink = <Link to="/select-station">{station}</Link>;
    if (!subject) {
      return (
        <div>
          In {stationLink}..
        </div>
      );
    }
    const subjectLink = <Link to="/select-subject">{subject}</Link>;
    if (!description) {
      return (
        <div>
          In {stationLink} the {subjectLink} was..
        </div>
      );
    }
    const descriptionLink = <Link to="/select-description">{description}</Link>;
    return (
      <div>
        In {stationLink} the {subjectLink} was {descriptionLink}
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
  console.log('state', state);
  // TODO: Get the props from the state form
  return {
    station: null,
    subject: null,
    description: null
  };
};

export default connect(mapStateToProps)(InProgressMessage);