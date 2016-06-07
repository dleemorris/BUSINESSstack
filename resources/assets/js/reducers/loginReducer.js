import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.isLoggedIn, action) {
  switch (action.type) {
    case types.AUTH_LOGIN:
      return state;

    default:
      return state;
  }
}
