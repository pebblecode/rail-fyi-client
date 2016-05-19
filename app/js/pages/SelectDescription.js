'use strict';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import config from '../config';
import DescriptionForm from '../containers/DescriptionForm';
import ProgressBar from '../components/ProgressBar';
import InProgressMessage from '../components/InProgressMessage';

class SelectDescription extends Component {
  render() {
    const descriptions = config.subjectDescriptions[this.props.category];
    return (
      <section className="select-description">
        <ProgressBar stage={3} />
        <InProgressMessage />
        Now go on, tell them what you thought.
        <DescriptionForm {...this.props} options={descriptions}/>
      </section>
    );
  }
}

SelectDescription.propTypes = {
  category: PropTypes.string
};

const mapStateToProps = state => {
  return {
    category: state.form.wizard.subject.value
  };
};

export default connect(mapStateToProps)(SelectDescription);
