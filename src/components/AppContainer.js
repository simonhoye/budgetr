import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import firebase from 'firebase';
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
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDRBzhtdZ_5OQ31YOhHPbsOIcqpTecHws0",
            authDomain: "budgetr-b3b4d.firebaseapp.com",
            databaseURL: "https://budgetr-b3b4d.firebaseio.com",
            projectId: "budgetr-b3b4d",
            storageBucket: "budgetr-b3b4d.appspot.com",
            messagingSenderId: "572275492321"
        });
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <AppWithNavigationState />
            </View>
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
    return {
        subscriptions: state.subscriptions
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);