import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { stageReducer as stage } from './stage';

export default combineReducers({
  form,
  stage
});
