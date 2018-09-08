import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Example of Mixin replacement with Higher Order Component.
// In React ecosystem Mixins are considered harmful and
// you should replace them with Higher Order Components if possible.
// Read Chapter 2 to get more details.
const withLogger = (ComponentToEnrich, logText) =>
    class WithLogger extends React.Component {
        componentDidMount = () => console.log(
            logText || 'Component has been rendered successfully!'
        );

        render = () => <ComponentToEnrich {...this.props} />;
    };

const App = () => (
    <View style={styles.container}>
        <Text>Some text in a component with mixin.</Text>
    </View>
);

export default withLogger(withLogger(App), 'Some other log msg');

const styles = StyleSheet.create({
    container: {
        padding: 20, // additional space from the screen edge
    }
});
