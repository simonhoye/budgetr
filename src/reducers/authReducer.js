import * as types from '../actions/actionTypes';
import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigator';

const initialAuthState = { isLoggedIn: false };

function auth(state = initialAuthState, action) {
    switch (action.type) {
        case types.ROUTE_LOGIN:
            return { ...state, isLoggedIn: true };
        case types.ROUTE_LOGOUT:
            return { ...state, isLoggedIn: false };
        default:
            return state;
    }
}

export default auth;