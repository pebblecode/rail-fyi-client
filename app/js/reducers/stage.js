'use strict';

import Actions from '../constants';

export function stageReducer(state = { page: 0 }, action) {
  switch (action.type) {
    case Actions.SET_STAGE:
      return Object.assign({}, state, {
        page: action.pageNumber
      });
    default:
      return state;
  }
}
