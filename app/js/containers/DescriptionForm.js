'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Option from '../components/Option';

class DescriptionForm extends Component {
  constructor(props) {
    super(props);

    // Delete old selected description if present (i.e. in back navigation case)
    const { description } = props.fields;
    description.onChange(null);
  }

  _onOptionClicked(option) {
    const { description } = this.props.fields;
    description.onChange(option);
    this.props.history.push('/send-complaint');
  }

  _renderOption(option) {
    return (
      <Option key={option.name} option={option} onClick={this._onOptionClicked.bind(this, option.name)} />
    )
  }
  _renderOptions() {
    const options = this.props.options;

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

DescriptionForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    form: state.form.wizard,
    category: state.form.wizard.subject.value
  };
}

export default reduxForm({
  form: 'wizard',
  fields: ['description'],
  destroyOnUnmount: false
})(connect(mapStateToProps)(DescriptionForm));
