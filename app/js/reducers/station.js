'use strict';

import Actions from '../constants';

export function stationReducer(state = { station: {} }, action) {
  switch (action.type) {
    case Actions.SET_STATION:
      return Object.assign({}, state, action.station);
    default:
      return state;
  }
}
