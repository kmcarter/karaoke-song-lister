import * as actionTypes from '../constants/actionTypes';
import initialState from './initialState';

export default function searchReducer(state = initialState.search, action) {
  switch (action.type) {
    case actionTypes.SAVE_SEARCH_RESULTS:
      let newState = Object.assign({}, state);
      newState[action.settings.searchTerm] = action.settings.results;
      return newState;

    default:
      return state;
  }
}
