import * as types from '../constants/actionTypes';

export function loading(settings) {
  return function (dispatch) {
    return dispatch({
      type: types.LOADING,
      settings
    });
  };
}
