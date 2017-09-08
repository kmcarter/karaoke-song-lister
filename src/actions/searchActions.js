import * as types from '../constants/actionTypes';

// example of a thunk using the redux-thunk middleware
export function search(settings) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.SEARCH_SONGS,
      settings
    });
  };
}
