'use strict';

import Actions from '../constants';

export function setStage(pageNumber) {
  return {
    type: Actions.SET_STAGE,
    pageNumber
  };
}
