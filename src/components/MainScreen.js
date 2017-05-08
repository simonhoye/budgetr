import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { NavigationActions } from 'react-navigation';

import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';


class MainScreen extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.actions);
    }
    handleClick() {
        return this.props.navigateToProfilePage();
    }

    render() {
        return (
            <View style={{marginTop: 20}}>
                <Text>Main Screen</Text>
                <TouchableHighlight onPress={ () => this.handleClick() }>
                    <Text>Touch Me</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ActionCreators, dispatch),
        navigateToProfilePage: () => dispatch(NavigationActions.navigate({ routeName: 'ROUTE_PROFILE' })),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainScreen);