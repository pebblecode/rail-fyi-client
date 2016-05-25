'use strict';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import config from '../config';
import { setStage } from '../actions/stage';
import DescriptionForm from '../containers/DescriptionForm';
import InProgressMessage from '../components/InProgressMessage';
import StationOperator from '../components/StationOperator';

class SelectDescription extends Component {
  componentWillMount() {
    this.props.dispatch(setStage(3));
  }

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
        <div className="content-container">
          <StationOperator />
          <InProgressMessage />
        </div>
        <div className="bottom-container">
          <p>Now go on, tell them what you thought.</p>
          <DescriptionForm {...this.props} options={descriptions}/>
        </div>
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
