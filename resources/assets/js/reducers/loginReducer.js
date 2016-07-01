import * as types from '../actionTypes';
import initialState from './initialState';

const actionsMap = {
  [types.AUTH_LOGIN](state) {
    return state;
  },
};

export default function invoices(state = initialState.loginReducer, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
