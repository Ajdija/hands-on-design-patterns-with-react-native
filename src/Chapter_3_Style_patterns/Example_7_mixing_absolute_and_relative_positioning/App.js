import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default () => (
    <View>
        <View style={[styles.box]}>
            <Text style={styles.text}>B1</Text>
        </View>
        <View style={[styles.box, {
            position: 'relative',
            width: 50,
            height: 50,
            backgroundColor: 'steelblue'
        }]}
        >
            <Text style={[styles.text, { fontSize: 40 }]}>B2</Text>
        </View>
        <View style={[styles.box, {
            left: 120,
            top: 120,
            backgroundColor: 'powderblue'
        }]}
        >
            <Text style={styles.text}>B3</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    box: {
        position: 'absolute',
        top: 40,
        left: 40,
        width: 100,
        height: 100,
        backgroundColor: 'red'
    },
    text: {
        color: '#ffffff',
        fontSize: 80
    }
});
