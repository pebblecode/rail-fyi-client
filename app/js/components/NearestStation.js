'use strict';

import React, { PropTypes, Component } from 'react';

import stationList from '../data/station-list';
import Option from '../components/Option';
import { setStation } from '../actions/station';

class NearestStation extends Component {

  constructor(props) {
    super(props);

    this.stationList = stationList;
    this.state = {};

    this._findNearestLocation();
  }

  _determineDistance(lat1, lon1, lat2, lon2) {
    const p = 0.017453292519943295;    // Math.PI / 180
    const c = Math.cos;
    const a = 0.5 - c((lat2 - lat1) * p)/2 +
              c(lat1 * p) * c(lat2 * p) *
              (1 - c((lon2 - lon1) * p))/2;

    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  }

  _updateLocation(station, distance) {
    setTimeout(() => {
      this.props.dispatch(setStation({
        nearestCode: station.crsCode,
        nearestName: station.name,
        distance: Math.round(distance)
      }));
    }, 1000);
  }

  _findNearestLocation() {

    const navigator = window.navigator;

    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const distances = this.stationList.map(station => {
          return this._determineDistance(pos.coords.latitude, pos.coords.longitude, station.latitude, station.longitude);
        });

        let minValue = Infinity;
        let minIndex = 0;
        for(let i = 0; i < distances.length; i++) {
          if (minValue > distances[i])
          {
            minIndex = i;
            minValue = distances[i];
          }
        }

        const station = this.stationList[minIndex];
        const distance = distances[minIndex];

        this._updateLocation(station, distance);

      });

    }

  }

  render() {
    const stationName = this.props.nearestName;
    const findingNearest =
      <Option option={{name: 'Finding nearest station...'}} />;
    const nearest =
      <Option
        option={{name: stationName}}
        onClick={this.props.onStationClick.bind(null, stationName)} />;
    let iconClasses = 'icon-large icon-location';
    let ulClasses = 'btn-group-list';
    if (!this.props.nearestCode) {
      ulClasses += ' disabled';
      iconClasses += ' loading';
    }
    return (
      <div>
        <span className={iconClasses}></span>
        <ul className={ulClasses}>
          {this.props.nearestCode ? nearest : findingNearest}
        </ul>
      </div>);
  }
}

NearestStation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onStationClick: PropTypes.func,
  nearestCode: PropTypes.string,
  nearestName: PropTypes.string
};

export default NearestStation;
