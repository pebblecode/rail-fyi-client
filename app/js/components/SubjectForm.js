'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

import Option from './Option';

export const fields = [ 'Toilet', 'Cleanliness', 'Temperature', 'Staff', 'Crowd' ];

class SubjectForm extends Component {

  _onOptionClicked() {
    console.log('I got clicked!');
  }

  _renderOption(field) {
    return (
      <Option key={field} optionText={field} onClick={this._onOptionClicked} />
    )
  }
  _renderOptions() {
    return fields.map((field) => {
      return this._renderOption(field);
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
  fields,
  destroyOnUnmount: false
})(connect(mapStateToProps)(SubjectForm));
