import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component {
    render = () => (
        <View style={styles.container}>
            <Text>Hands-On Design Patterns with React Native</Text>
            <Text>Chapter 1: React Component Patterns</Text>
            <Text style={styles.text}>
                You are ready to start the journey. Fun fact is, this
                text is rendered by class component called App. Check
                App.js if you want to look it up.
            </Text>
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
    }
});
