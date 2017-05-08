/**
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import AppContainer from './src/components/AppContainer';
import { loadSubscriptions } from './src/actions/subscriptionActions';
import AppWithNavigationState from './src/navigators/AppNavigator';

import { AppRegistry } from 'react-native';

const store = configureStore();
store.dispatch(loadSubscriptions());

export default class budgetr extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}


AppRegistry.registerComponent('budgetr', () => budgetr);
