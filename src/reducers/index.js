 
import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer';
import authReducer from './authReducer';
import storyReducer from './storyReducers';

const rootReducer = combineReducers({
  loader: loaderReducer,
  auth: authReducer,
  stories: storyReducer
});

export default rootReducer;
