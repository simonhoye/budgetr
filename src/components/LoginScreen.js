import React, { PropTypes, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            email: '',
            password: '',
            error: '',
            loading: false
        };
    }
    onButtonPress() {
        // TODO:login user
    }
    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        } 

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Card>
                    <CardSection>
                        <Input 
                            label="Email"
                            value={this.state.text}
                            onChangeText={email => this.setState({ email })} 
                            placeholder="user@gmail.com"
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            placeholder="password"
                            label="Password"
                            secureTextEntry
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>
                    <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

LoginScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

LoginScreen.navigationOptions = {
    title: 'Log In',
};

export default LoginScreen;
