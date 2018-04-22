import React from 'react';
import { View, Text } from 'react-native';

export default () => (
    <View style={{ flex: 1, marginTop: 30 }}>
        <View
            style={{ backgroundColor: 'powderblue', height: 50 }}
        >
            <Text style={{ fontSize: 40 }}>Header</Text>
        </View>
        <View
            style={{ backgroundColor: 'skyblue', flex: 1 }}
        >
            <Text style={{ fontSize: 40 }}>Main content</Text>
        </View>
        <View
            style={{
                backgroundColor: 'steelblue',
                height: 100,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingLeft: 10,
                paddingRight: 10
            }}
        >
            <View><Text style={{ fontSize: 40 }}>Home</Text></View>
            <View><Text style={{ fontSize: 40 }}>Search</Text></View>
            <View><Text style={{ fontSize: 40 }}>About</Text></View>
        </View>
    </View>
);
