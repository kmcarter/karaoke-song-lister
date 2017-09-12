import * as types from '../constants/actionTypes';

export function saveLookupResults(settings) {
  return function (dispatch) {
    return dispatch({
      type: types.SAVE_LOOKUP_RESULTS,
      settings
    });
  };
}
