'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Option from '../components/Option';

export const options = [ 'Toilet', 'Cleanliness', 'Temperature', 'Staff', 'Crowd' ];

class SubjectForm extends Component {

  _onOptionClicked(option) {
    const { subject } = this.props.fields;
    subject.onChange(option);
    this.props.history.push('/select-description');
  }

  _renderOption(option) {
    return (
      <Option key={option} optionText={option} onClick={this._onOptionClicked.bind(this, option)} />
    )
  }
  _renderOptions() {
    return options.map((option) => {
      return this._renderOption(option);
    });
  }

  render() {
    return (
      <div>
        {this._renderOptions()}
      </div>
    );
  }
}

SubjectForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    form: state.form.wizard
  };
}

export default reduxForm({
  form: 'wizard',
  fields: ['subject'],
  destroyOnUnmount: false
})(connect(mapStateToProps)(SubjectForm));
