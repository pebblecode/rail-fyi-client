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
    const options = fields.map((field) => {
      return this._renderOption(field);
    });

    return options;
  }

  render() {
    const options = this._renderOptions();
    console.log(options);
    return (
      <div>
        {options}
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
    form: state.form.wizard // <---------
  };
}

const SubjectReduxForm = reduxForm({
  form: 'wizard',
  fields
})(SubjectForm);

export default connect(mapStateToProps)(SubjectReduxForm);
