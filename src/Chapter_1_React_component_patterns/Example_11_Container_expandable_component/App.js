import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Tip: Below components could be placed in separate files.
//      One file per one component.

export const HelloText = ({children, ...otherProps}) => (
    <Text {...otherProps}>{children}</Text>
);

export const HelloBox = ({
    isExpanded,
    expandOrCollapse,
    containerStyles,
    expandedTextStyles
}) => (
    <View style={containerStyles || styles.container}>
        <HelloText onPress={() => expandOrCollapse()}>
            Hands-On Design Patterns with React Native
        </HelloText>
        <HelloText onPress={() => expandOrCollapse()}>
            Chapter 1: React Component Patterns
        </HelloText>
        {
            isExpanded &&
            <HelloText style={expandedTextStyles || styles.text}>
                You can expand and collapse this text by clicking
                the Title or Chapter text. Bonus: Check Chapter 4
                to learn how to animate expanding andcollapsing.
            </HelloText>
        }
    </View>
);

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            // default state on first render
            expanded: false
        };
        this.expandOrCollapse = this.expandOrCollapse.bind(this);
    }

    expandOrCollapse() {
        // toggle expanded: true becomes false, false becomes true
        this.setState({expanded: !this.state.expanded});
    }

    render = () => (
        <HelloBox
            isExpanded={this.state.expanded}
            expandOrCollapse={this.expandOrCollapse}
            expandedTextStyles={{ color: 'red' }}
        />
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
