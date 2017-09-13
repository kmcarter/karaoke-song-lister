import * as actionTypes from '../constants/actionTypes';
import initialState from './initialState';

export default function searchReducer(state = initialState.search, action) {
  switch (action.type) {
    case actionTypes.SAVE_SEARCH_RESULTS:
      return formatSearchResults(state, action.settings);

    default:
      return state;
  }
}

function formatSearchResults(state, settings) {
  let counter = settings.response.pagination.startIndex;
  const existingResult = state[settings.searchTerm] ? state[settings.searchTerm].results : [];
  const resultsWithIndex = settings.response.results.map((val) => {
    return {
      ...val,
      Index: counter++
    };
  });
  return Object.assign({}, state, {
    [settings.searchTerm]: {
      pagination: settings.response.pagination,
      results: existingResult.concat(resultsWithIndex)
    }
  });
}
