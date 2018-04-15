import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';

export default () => {
    const { height, width } = Dimensions.get('window');
    return (
        <View style={{ marginTop: 40 }}>
            <Text>Width: {width}, Height: {height}</Text>
            <View
                style={{
                    width: width / 4,
                    height: height / 3,
                    backgroundColor: 'steelblue'
                }}
            />
            <View style={styles.powderblue} />
        </View>
    );
};

const styles = StyleSheet.create({
    powderblue: {
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').height / 5,
        backgroundColor: 'powderblue'
    }
});
