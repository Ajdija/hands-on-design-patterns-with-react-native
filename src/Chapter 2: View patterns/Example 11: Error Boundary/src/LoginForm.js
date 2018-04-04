import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

export default class LoginForm extends React.Component {
    // Initial state for our components
    state = {
        login: this.props.initLogin || '', // remembered login or ''
        password: ''
    };
    // Submit handler when the Login button is pressed
    submit = () => {
        console.log(this.state.login);
        console.log(this.state.password);
    };

    render() {
        throw new Error('Cannot render LoginForm');
        return (
            <View style={styles.container}>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder={'Login'}
                        onChangeText={login => this.setState({login})}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder={'Password'}
                        onChangeText={
                            password => this.setState({password})
                        }
                        secureTextEntry={true} // hide password
                    />
                </View>
                <View>
                    <Button
                        onPress={this.submit}
                        title="Login"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20, // additional space from the screen edge
    },
    input: {
        height: 50
    }
});
