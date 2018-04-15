import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppText from './src/AppText';
import HeaderText from './src/HeaderText';

export default () => (
    <View style={styles.container}>
        <HeaderText>Some header text</HeaderText>
        <AppText>
            some text, Verdana font
            <Text style={styles.big}>
                some big text, Verdana font
            </Text>
        </AppText>
        <Text style={styles.big}>
            some normal big text
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 40
    },
    big: {
        fontSize: 35
    }
});
