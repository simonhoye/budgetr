import * as types from '../actions/actionTypes';
import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigator';

const initialAuthState = { isLoggedIn: false };

function auth(state = initialAuthState, action) {
    switch (action.type) {
        case types.LOGIN_USER:
            return { ...state, isLoggedIn: true };
        case types.LOGOUT_USER:
            return { ...state, isLoggedIn: false };
        default:
            return state;
    }
}

export default auth;