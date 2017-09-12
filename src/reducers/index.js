import { combineReducers } from 'redux';
import app from './appReducer';
import search from './searchReducer';
import lookup from './lookupReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  app,
  search,
  lookup,
  routing: routerReducer
});

export default rootReducer;
