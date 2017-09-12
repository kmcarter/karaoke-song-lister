import * as actionTypes from '../constants/actionTypes';
import initialState from './initialState';

export default function lookupReducer(state = initialState.lookup, action) {
  switch (action.type) {
    case actionTypes.SAVE_LOOKUP_RESULTS:
      return Object.assign({}, state, {
        [action.settings.artistOrTitle]: {
          [action.settings.searchTerm]: action.settings.results
        }
      });

    default:
      return state;
  }
}
