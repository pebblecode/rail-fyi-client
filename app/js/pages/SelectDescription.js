'use strict';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import config from '../config';
import DescriptionForm from '../containers/DescriptionForm';
import ProgressBar from '../components/ProgressBar';
import InProgressMessage from '../components/InProgressMessage';

class SelectDescription extends Component {
  _findDescriptions() {
    const { category } = this.props;
    const options = config.subjects;

    let descriptions;

    options.forEach((option) => {
      if (option.name === category) {
        descriptions = option.options;
      }
    });

    return descriptions;
  }

  render() {
    const descriptions = this._findDescriptions();

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
