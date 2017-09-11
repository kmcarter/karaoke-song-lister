import { combineReducers } from 'redux';
import app from './appReducer';
import search from './searchReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  app,
  search,
  routing: routerReducer
});

export default rootReducer;
