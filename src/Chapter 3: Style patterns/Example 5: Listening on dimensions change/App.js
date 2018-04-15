import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';

export default class LogDimensionChanges extends React.Component {
    state = { window: Dimensions.get('window') };
    componentWillMount() {
        Dimensions.addEventListener('change', this.handler);
    }
    componentWillUnmount() {
        // Important to remove listener after unmount
        Dimensions.removeEventListener('change', this.handler);
    }
    handler = dims => this.setState(dims);

    render() {
        const { width, height } = this.state.window;
        const powderBlueBox = StyleSheet.flatten([
            styles.powderBlueBox,
            // Update StyleSheet styles on dimension change
            {
                width: this.state.window.width / 4,
                height: this.state.window.height / 5
            }
        ]);

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
                <View style={powderBlueBox} />
            </View>
        );
    }
}

// StyleSheets wont update to dimension change with just below code
// changing below to use this.state will give an error
// check the Chapter 3 for explanation
const styles = StyleSheet.create({
    powderBlueBox: {
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').height / 5,
        backgroundColor: 'powderblue'
    }
});
