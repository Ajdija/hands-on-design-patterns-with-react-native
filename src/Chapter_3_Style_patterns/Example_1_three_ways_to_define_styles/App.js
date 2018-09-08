import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default () => (
    <View style={{ marginTop: 40 }}>
        <Text style={{ color: 'green' }}>inline object green</Text>
        <Text style={styles.green}>styles.green green</Text>
        <Text style={[styles.green, styles.bigred]}>
            [styles.green, styles.bigred]
        </Text>
        <Text style={[styles.bigred, styles.green]}>
            [styles.bigred, styles.green]
        </Text>
    </View>
);

const styles = StyleSheet.create({
    green: {
        color: 'green'
    },
    bigred: {
        color: 'red',
        fontSize: 35
    }
});
