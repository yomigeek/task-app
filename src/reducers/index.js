 
import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  loader: loaderReducer,
  auth: authReducer,
});

export default rootReducer;
