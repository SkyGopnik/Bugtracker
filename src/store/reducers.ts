import { combineReducers } from 'redux';
import { appReducer } from './app/reducers';
import { reportListReducer } from './reportList/reducers';
import { productListReducer } from './productList/reducers';

export default combineReducers({
  app: appReducer,
  reportList: reportListReducer,
  productList: productListReducer
});
