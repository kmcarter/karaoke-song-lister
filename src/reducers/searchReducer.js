import * as actionTypes from '../constants/actionTypes';
import initialState from './initialState';

export default function searchReducer(state = initialState.search, action) {
  switch (action.type) {
    case actionTypes.SAVE_SEARCH_RESULTS:
      return Object.assign({}, state, {
        [action.settings.searchTerm]: action.settings.results
      });

    default:
      return state;
  }
}
