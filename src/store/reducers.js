import { combineReducers } from 'redux';
import { testReducer } from './test/reducers';

export default combineReducers({
  test: testReducer
});
