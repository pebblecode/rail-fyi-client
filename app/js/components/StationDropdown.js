'use strict';

import React, { Component, PropTypes } from 'react';
import Autocomplete from 'react-autocomplete';

import stationList from '../data/station-list';

class StationDropdown extends Component {
  constructor(props) {
    super(props);
    this.stationList = stationList.map(station => station.name);
    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <Autocomplete
        value={this.state.value}
        items={this.stationList}
        onChange={(event, value) => this.setState({value})}
        getItemValue={station => station}
        shouldItemRender={(station, value) => value !== '' && station.toLowerCase().indexOf(value.toLowerCase()) !== -1}
        onSelect={value => this.setState({value})}
        renderItem={(station, isHighlighted) => (
            <div
                style={isHighlighted ? {'backgroundColor': 'yellow'} : {}}
                key={station}>
              {station}
            </div>
        )} />
    );
  }
}

export default StationDropdown;
