import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HelloText = ({ children, ...otherProps }) => (
    <Text {...otherProps}>{children}</Text>
);
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            // default state on first render
            expanded: false
        };
    }

    expandOrCollapse() {
        // toggle expanded: true becomes false, false becomes true
        this.setState({expanded: !this.state.expanded});
    }

    render = () => (
        <View style={styles.container}>
            <HelloText onPress={() => this.expandOrCollapse()}>
                Hands-On Design Patterns with React Native
            </HelloText>
            <HelloText onPress={() => this.expandOrCollapse()}>
                Chapter 1: React Component Patterns
            </HelloText>
            {
                this.state.expanded &&
                <HelloText style={styles.text}>
                    You can expand and collapse this text by clicking
                    the Title or Chapter text. Bonus: Check Chapter 4
                    to learn how to animate expanding andcollapsing.
                </HelloText>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: '10%',
        justifyContent: 'center',
    },
    text: {
        marginTop: '5%',
    }
});
