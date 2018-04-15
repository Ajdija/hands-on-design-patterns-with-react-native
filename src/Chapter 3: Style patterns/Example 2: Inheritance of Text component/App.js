import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default () => (
    <View style={styles.container}>
        <Text style={styles.green}>
            some green text
            <Text style={styles.big}>
                some big green text
            </Text>
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 40
    },
    green: {
        color: 'green'
    },
    big: {
        fontSize: 35
    }
});
