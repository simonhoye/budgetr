import * as types from '../actions/actionTypes';
import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigator';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams(types.ROUTE_MAIN);
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams(types.ROUTE_LOGIN);
const initialNavState = AppNavigator.router.getStateForAction(secondAction, tempNavState);

function nav(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
        case types.LOGIN_USER:
            nextState = AppNavigator.router.getStateForAction(NavigationActions.back(), state);
            break;
        case types.LOGOUT_USER:
            nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: types.ROUTE_LOGIN }), state);
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
        break;
  }
    
    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}

export default nav;