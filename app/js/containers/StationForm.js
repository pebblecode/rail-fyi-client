'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import NearestStation from '../components/NearestStation';
import StationDropdown from '../components/StationDropdown';

class StationForm extends Component {

  _onSelectItem(item) {
    const { station } = this.props.fields;
    station.onChange(item);
    this.props.history.push('/select-subject');
  }

  render() {
    return (
      <div>
        <NearestStation onStationClick={this._onSelectItem.bind(this)} />
        <StationDropdown onSelectItem={this._onSelectItem.bind(this)} />
      </div>
    );
  }
}

StationForm.propTypes = {
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
  fields: ['station'],
  destroyOnUnmount: false
})(connect(mapStateToProps)(StationForm));
