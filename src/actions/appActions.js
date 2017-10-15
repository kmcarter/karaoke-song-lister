import * as types from '../constants/actionTypes';

export function loading(settings) {
  return function (dispatch) {
    return dispatch({
      type: types.LOADING,
      settings
    });
  };
}

export function setResultsPerPage(settings) {
  return function (dispatch) {
    return dispatch({
      type: types.SET_RESULTS_PER_PAGE,
      settings
    });
  };
}