import React from 'react';
import HelloText from './HelloText';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';

export const HelloBox = ({
    isExpanded,
    expandOrCollapse,
    containerStyles,
    expandedTextStyles
}) => (
    <View style={containerStyles}>
        <HelloText onPress={() => expandOrCollapse()}>
            Hands-On Design Patterns with React Native
        </HelloText>
        <HelloText onPress={() => expandOrCollapse()}>
            Chapter 1: React Component Patterns
        </HelloText>
        {
            isExpanded &&
            <HelloText style={expandedTextStyles}>
                You can expand and collapse this text by clicking
                the Title or Chapter text. Bonus: Check Chapter 4
                to learn how to animate expanding andcollapsing.
            </HelloText>
        }
    </View>
);

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

HelloBox.propTypes = {
    isExpanded: PropTypes.bool.isRequired,
    expandOrCollapse: PropTypes.func.isRequired,
    containerStyles: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number
    ]),
    expandedTextStyles: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number
    ])
};

HelloBox.defaultProps = {
    containerStyles: styles.container,
    expandedTextStyles: styles.text
};

export default HelloBox;
