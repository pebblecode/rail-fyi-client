'use strict';

import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import stationList from '../data/station-list';

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
    this.setState({
      nearestCode: station.crsCode,
      nearestName: station.name,
      distance: Math.round(distance)
    });
  }

  _findNearestLocation() {

    let navigator = window.navigator;

    if (navigator && navigator.geolocation) {

      navigator.geolocation.getCurrentPosition((pos) => {
        const distances = this.stationList.map(station => {
          return this._determineDistance(pos.coords.latitude, pos.coords.longitude, station.latitude, station.longitude)
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
    console.log(this.props);
    const stationName = this.state.nearestName;
    const station =
      <Link to={this.props.onStationClick}>
        {stationName}
      </Link>;
    const nearest =
      <p>
        Nearest station: {station} {this.state.distance}km
      </p>;
    return (
      <div>
        {this.state.nearestCode ? nearest : 'Finding nearest station...'}
      </div>);
  }
}

NearestStation.propTypes = {
  onStationClick: PropTypes.string
};

export default NearestStation;
