import { combineReducers } from 'redux';
import app from './appReducer';
import searchCache from './searchReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  app,
  searchCache,
  routing: routerReducer
});

export default rootReducer;
