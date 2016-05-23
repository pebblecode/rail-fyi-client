'use strict';

import Actions from '../constants';

export function setStage(pageNumber) {
  console.log('hello');
  return {
    type: Actions.SET_STAGE,
    pageNumber
  };
}
