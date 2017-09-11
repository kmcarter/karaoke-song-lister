import * as actionTypes from '../constants/actionTypes';
import initialState from './initialState';

export default function appReducer(state = initialState.app, action) {
  switch (action.type) {
    case actionTypes.LOADING:
      return Object.assign({}, state, { loading: action.settings });

    default:
      return state;
  }
}
