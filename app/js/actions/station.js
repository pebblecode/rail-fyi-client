'use strict';

import Actions from '../constants';

export function setStation(station) {
  return {
    type: Actions.SET_STATION,
    station
  };
}
