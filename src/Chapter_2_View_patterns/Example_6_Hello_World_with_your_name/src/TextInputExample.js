import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default class TextInputExample extends React.Component {
    state = {
        name: null
    };

    render = () => (
        <View style={styles.container}>
            {this.state.name && (
                <Text style={styles.text}>
                    Hello {this.state.name}
                </Text>
            )}
            <Text>Hands-On Design Patterns with React Native</Text>
            <Text>Chapter 2: View Patterns</Text>
            <Text style={styles.text}>
                Enter your name below and see what happens.
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={name => this.setState({name})}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: '10%',
        justifyContent: 'center',
    },
    text: {
        marginTop: '5%',
        marginBottom: '5%'
    },
    input: {
        height: '5%',
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1
    }
});
