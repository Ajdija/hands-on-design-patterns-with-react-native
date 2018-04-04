import React from 'react';
import {TextInput, Text, View, Button} from 'react-native';
import LoginForm from './src/LoginForm';

// Hint:
// When in release mode
// it will not show the Red Screen
class AppErrorBoundary extends React.Component {
    state = { hasError: false, errorMsg: null};

    componentDidCatch(error) {
        this.setState({
            hasError: true,
            errorMsg: error
        });
    }

    render = () => (
        this.state.hasError
            ? (
                <View>
                    <Text>Something went wrong.</Text>
                    <Text>{this.state.errorMsg.toString()}</Text>
                </View>
            )
            : this.props.children
    )
}

export default () => (
    <AppErrorBoundary>
        <LoginForm />
    </AppErrorBoundary>
)
