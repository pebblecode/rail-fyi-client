'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm, change } from 'redux-form';

import Option from '../components/Option';

class SubjectForm extends Component {
  componentWillMount() {
    // Delete old selected station, subject & description if present (i.e. in back navigation case)
    this.props.dispatch(change('wizard', 'subject', null))
    this.props.dispatch(change('wizard', 'description', null))
  }

  _onOptionClicked(option) {
    const { subject } = this.props.fields;
    subject.onChange(option);
    this.props.history.push('/select-description');
  }

  _renderOption(option) {
    return (
      <Option key={option.name} option={option} onClick={this._onOptionClicked.bind(this, option.name)} />
    )
  }
  _renderOptions() {

    const options = this.props.options;

    if (!options) return;

    const optionElements = options.map((option) => {
      return this._renderOption(option);
    });

    return (
      <ul className="btn-group-list">
        {optionElements}
      </ul>
    );
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
  fields: ['subject', 'description'],
  destroyOnUnmount: false
})(connect(mapStateToProps)(SubjectForm));
