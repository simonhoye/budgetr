import * as types from '../actions/actionTypes';

export default function subscriptionReducer(state = {}, action) {
  switch(action.type) {
    case types.LOAD_SUBSCRIPTIONS_SUCCESS:
      return action.subscriptions;

    default:
      return state;
  }
}