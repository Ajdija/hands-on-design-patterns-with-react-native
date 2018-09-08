import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import AppText from './AppText';

const HeaderText = ({ children, ...props }) => (
    <AppText>
        <Text style={styles.headerText} {...props}>
            {children}
        </Text>
    </AppText>
);

HeaderText.propTypes = {
    children: PropTypes.node
};

HeaderText.defaultProps = {
    children: null
};

const styles = StyleSheet.create({
    headerText: {
        fontSize: 30
    }
});

export default HeaderText;
