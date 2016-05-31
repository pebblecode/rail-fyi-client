'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm, change } from 'redux-form';

import NearestStation from '../components/NearestStation';
// import StationDropdown from '../components/StationDropdown';

class StationForm extends Component {

  componentWillMount() {
    // Delete old selected station, subject & description if present (i.e. in back navigation case)
    this.props.dispatch(change('wizard', 'station', null));
    this.props.dispatch(change('wizard', 'subject', null));
    this.props.dispatch(change('wizard', 'description', null));
  }

  _onSelectItem(item) {
    const { station } = this.props.fields;
    station.onChange(item);
    this.props.history.push('/select-subject');
  }

  render() {
    return (
      <div>
        <NearestStation
          onStationClick={this._onSelectItem.bind(this)}
          dispatch={this.props.dispatch}
          nearestName={this.props.nearestName}
          nearestCode={this.props.nearestCode}
          distance={this.props.distance}
        />
        {/*<StationDropdown onSelectItem={this._onSelectItem.bind(this)} />*/}
      </div>
    );
  }
}

StationForm.propTypes = {
  history: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  nearestName: PropTypes.string,
  nearestCode: PropTypes.string,
  distance: PropTypes.number
};

function mapStateToProps(state) {
  return {
    form: state.form.wizard,
    nearestCode: state.station.nearestCode,
    nearestName: state.station.nearestName,
    distance: state.station.distance
  };
}

export default reduxForm({
  form: 'wizard',
  fields: ['station', 'subject', 'description'],
  destroyOnUnmount: false
})(connect(mapStateToProps)(StationForm));
