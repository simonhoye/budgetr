import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import AppWithNavigationState from '../navigators/AppNavigator';

import {
    Text,
    View
} from 'react-native';

class AppContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <AppWithNavigationState />
        )
    }
}

AppContainer.propTypes = {
    subscriptions: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ActionCreators, dispatch)
    }
}

function mapStateToProps(state) {
    console.log('appstate:',state);
    return {
        subscriptions: state.subscriptions
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);