import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginScreen from '../components/LoginScreen';
import MainScreen from '../components/MainScreen';
import ProfileScreen from '../components/ProfileScreen';

export const AppNavigator = StackNavigator({
    ROUTE_LOGIN: { screen: LoginScreen },
    ROUTE_MAIN: { screen: MainScreen },
    ROUTE_PROFILE: { screen: ProfileScreen },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
    // console.log('state:',state);
    return {
        nav: state.nav
    }
}

export default connect(mapStateToProps)(AppWithNavigationState);