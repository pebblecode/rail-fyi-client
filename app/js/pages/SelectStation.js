'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
import Autocomplete from 'react-autocomplete';
import Progress from '../components/Progress';
import NearestStation from '../components/NearestStation';
import stationList from '../data/station-list';

class SelectStation extends Component {
  constructor(props) {
    super(props);
    this.stationList = stationList.map(station => station.name);
  }

  render() {
    return (
      <section className="select-station">
        <Progress stage={1} />
        <h1>Station</h1>
        <p>Which station would you like to give us feedback on?</p>
        <NearestStation onStationClick='/select-subject' />
        <p>Not the right station? Select below:</p>
        <Autocomplete
          items={this.stationList}
          getItemValue={station => station}
          shouldItemRender={(station, value) => value !== '' && station.toLowerCase().indexOf(value.toLowerCase()) !== -1}
          onSelect={value => console.log('Redirect to next page', value)}
          renderItem={(station, isHighlighted) => (
              <div
                  style={isHighlighted ? {'backgroundColor': 'yellow'} : {}}
                  key={station}>
                {station}
              </div>
          )} />
      </section>
    );
  }
}

export default SelectStation;
