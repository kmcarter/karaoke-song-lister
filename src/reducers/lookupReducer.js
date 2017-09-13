import * as actionTypes from '../constants/actionTypes';
import initialState from './initialState';

export default function lookupReducer(state = initialState.lookup, action) {
  switch (action.type) {
    case actionTypes.SAVE_LOOKUP_RESULTS:
      return formatLookupResults(state, action.settings);
    default:
      return state;
  }
}

function formatLookupResults(state, settings) {
  let counter = settings.response.pagination.startIndex;
  const existingResult = state[settings.artistOrTitle][settings.searchTerm] ? state[settings.artistOrTitle][settings.searchTerm].results : [];
  const resultsWithIndex = settings.response.results.map((val) => {
    return {
      ...val,
      Index: counter++
    };
  });
  return Object.assign({}, state, {
    [settings.artistOrTitle]: {
      [settings.searchTerm]: {
        pagination: settings.response.pagination,
        results: existingResult.concat(resultsWithIndex)
      }
    }
  });
}