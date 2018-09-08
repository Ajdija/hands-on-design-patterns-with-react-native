import React from 'react';
import { View } from 'react-native';

export default () => (
    <View style={{ flex: 1 }}>
        <View
            style={{ backgroundColor: 'powderblue', height: 50 }}
        />
        <View
            style={{ backgroundColor: 'skyblue', height: 50 }}
        />
        <View
            style={{ backgroundColor: 'steelblue', height: 50 }}
        />
    </View>
);
