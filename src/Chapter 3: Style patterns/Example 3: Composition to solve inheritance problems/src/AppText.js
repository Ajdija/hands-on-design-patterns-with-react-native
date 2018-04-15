import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const AppText = ({ children, ...props }) => (
    <Text style={styles.appText} {...props}>
        {children}
    </Text>
);

AppText.propTypes = {
    children: PropTypes.node
};

AppText.defaultProps = {
    children: null
};

const styles = StyleSheet.create({
    appText: {
        fontFamily: 'Verdana'
    }
});

export default AppText;
