import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import createReactClass from 'create-react-class';

// Example of Mixin usage.
// Please proceed with caution this is an example only.
// In React ecosystem Mixins are considered harmful and
// you should replace them with Higher Order Components if possible.
// Read Chapter 2 to get more details.
const LoggerMixin = {
    componentDidMount: function() {
        console.log('Component has been rendered successfully!');
    }
};
const LoggerMixin2 = {
    componentDidMount: function() {
        console.log('Component has been rendered successfully! x2');
    }
};

export default createReactClass({
    mixins: [LoggerMixin, LoggerMixin2],

    render: function() {
        return (
            <View style={styles.container}>
                <Text>Some text in a component with mixin.</Text>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        padding: 20, // additional space from the screen edge
    }
});
