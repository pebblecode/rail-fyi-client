'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { setStage } from '../actions/stage';
import StationForm from '../containers/StationForm';

class SelectStation extends Component {
  componentWillMount() {
    this.props.dispatch(setStage(1));
  }

  render() {
    return (
      <section className="select-station">
        <div className="bottom-container">
          <p>Which station would you like to give us feedback on?</p>
          <StationForm {...this.props} />
        </div>
      </section>
    );
  }
}

SelectStation.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(SelectStation);
