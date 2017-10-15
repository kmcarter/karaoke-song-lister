import * as types from '../constants/actionTypes';

export function saveSearchResults(settings) {
  return function (dispatch) {
    return dispatch({
      type: types.SAVE_SEARCH_RESULTS,
      settings
    });
  };
}

export function saveArtistResults(settings) {
  return function (dispatch) {
    return dispatch({
      type: types.SAVE_ARTIST_RESULTS,
      settings
    });
  };
}

export function saveTitleResults(settings) {
  return function (dispatch) {
    return dispatch({
      type: types.SAVE_TITLE_RESULTS,
      settings
    });
  };
}

export function invalidateCache(settings) {
  return function (dispatch) {
    return dispatch({
      type: types.INVALIDATE_CACHE,
      settings
    });
  };
}
