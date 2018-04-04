import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HelloText = ({children, ...otherProps}) => (
    <Text {...otherProps}>{children}</Text>
);
const App = () => (
    <View style={styles.container}>
        <HelloText>
            Hands-On Design Patterns with React Native
        </HelloText>
        <HelloText>Chapter 1: React Component Patterns</HelloText>
        <HelloText style={styles.text}>
            You are ready to start the journey. Fun fact is, this text
            is rendered by Functional Component called HelloText.
            Check App.js if you want to look it up.
        </HelloText>
    </View>
);
export default App;

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
    }
});
