import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

import {
  Text,
  View
} from 'react-native';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subscriptions: Object.assign({},this.props.subscriptions)
        };
    }
    render() {
        return (
            <View>
                <Text>
                    Welcome to BudgetR!
                </Text>
            </View>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
    return {
        subscriptions: Object.assign({}, state.subscriptions)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);