import * as types from '../constants/actionTypes';

export function search(settings) {
  return function (dispatch) {
    return dispatch({
      type: types.SEARCH_SONGS,
      settings
    });
  };
}
