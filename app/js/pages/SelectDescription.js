'use strict';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from '../config';
import ProgressBar from '../components/ProgressBar';
import InProgressMessage from '../components/InProgressMessage';

class SelectDescription extends Component {
  render() {
    console.log(config.subjectDescriptions);
    const descriptions = config.subjectDescriptions[this.props.category];
    return (
      <section className="select-description">
        <ProgressBar stage={3} />
        <InProgressMessage />
        Now go on, tell them what you thought.
        <ul>
          {descriptions.map(d => <li key={d}>{d}</li>)}
        </ul>
      </section>
    );
  }
}

SelectDescription.propTypes = {
  category: PropTypes.string
};

const mapStateToProps = state => {
  return {
    category: 'Toilet'
  };
};

export default connect(mapStateToProps)(SelectDescription);
