import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CounterView = ({ inc, dec, count }) => (
    <View style={styles.panel}>
        <Button title="-" onPress={dec} />
        <Text>{count}</Text>
        <Button title="+" onPress={inc} />
    </View>
);

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        marginTop: 40,
        flexDirection: 'row'
    },
});

export default CounterView;
