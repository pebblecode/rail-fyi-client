import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { stageReducer as stage } from './stage';
import { stationReducer as station } from './station';

export default combineReducers({
  form,
  stage,
  station
});
