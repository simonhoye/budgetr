import * as types from '../actions/actionTypes';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

const AuthButton = ({ logout, login, isLoggedIn }) => (
    <Button
        title={isLoggedIn ? 'Log Out' : 'Log In'}
        onPress={isLoggedIn ? logout : login}
    />
);

AuthButton.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch({ type: types.LOGOUT_USER }),
    login: () => dispatch(NavigationActions.navigate({ routeName: types.ROUTE_LOGIN })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);