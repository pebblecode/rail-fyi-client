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

  _onSelectItem(value) {
    this.setState({
      value
    });
    this.props.onSelectItem(value);
  }

  _onTextValueChange(event, value) {
    this.setState({
      value
    });
  }

  render() {
    return (
      <Autocomplete
        value={this.state.value}
        items={this.stationList}
        onChange={this._onTextValueChange.bind(this)}
        getItemValue={station => station}
        shouldItemRender={(station, value) => value !== '' && station.toLowerCase().indexOf(value.toLowerCase()) !== -1}
        onSelect={(value) => this._onSelectItem(value)}
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

StationDropdown.propTypes = {
  onSelectItem: PropTypes.func
};

export default StationDropdown;
