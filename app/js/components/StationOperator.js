'use strict';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import stationList from '../data/station-list';
import config from '../config';

class StationOperator extends Component {
  render() {
    const { station } = this.props;
    const stationOperatorCode =
      stationList.filter(s => s.name === station)[0].stationOperator;
    const stationOperator =
      config.stationOperators.filter(o => o.code === stationOperatorCode)[0].name;
    return <p>Dear <b>{stationOperator}</b>,</p>;
  }
}

StationOperator.propTypes = {
  station: PropTypes.string
};

const mapStateToProps = state => {
  return {
    station: state.form.wizard.station.value
  };
};

export default connect(mapStateToProps)(StationOperator);
