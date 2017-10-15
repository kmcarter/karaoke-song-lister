import * as actionTypes from '../constants/actionTypes';
import initialState from './initialState';

export default function searchReducer(state = initialState.searchCache, action) {
  switch (action.type) {
    case actionTypes.SAVE_SEARCH_RESULTS:
      return formatResults(state, "search", action.settings);
    case actionTypes.SAVE_ARTIST_RESULTS:
      return formatResults(state, "artist", action.settings);
    case actionTypes.SAVE_TITLE_RESULTS:
      return formatResults(state, "title", action.settings);
    case actionTypes.INVALIDATE_CACHE:
      return invalidateCache(initialState.searchCache);
    default:
      return state;
  }
}

function formatResults(state, key, settings) {
  let counter = settings.response.pagination.startIndex;
  const existingResult = state[key][settings.searchTerm] ? state[key][settings.searchTerm].results : [];
  const resultsWithIndex = settings.response.results.map((val) => {
    return {
      ...val,
      Index: counter++
    };
  });
  return Object.assign({}, state, {
    [key]: {
      [settings.searchTerm]: {
        pagination: settings.response.pagination,
        results: existingResult.concat(resultsWithIndex)
      }
    }
  });
}

function invalidateCache(initialState) {
  return Object.assign({}, initialState);
}