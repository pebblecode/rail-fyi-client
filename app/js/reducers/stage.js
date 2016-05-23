'use strict';

import Actions from '../constants';

export function stageReducer(state = { page: 0 }, action) {
  console.log('State: state and action: ', state, action);
  switch (action.type) {
    case Actions.SET_STAGE:
      return Object.assign({}, state, {
        page: action.pageNumber
      });
    default:
      return state;
  }
}
