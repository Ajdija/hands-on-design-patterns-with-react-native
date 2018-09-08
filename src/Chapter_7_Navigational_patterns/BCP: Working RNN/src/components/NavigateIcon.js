import React from 'react';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

export const NavigateIcon = ({
    navigation, to, data, ...iconProps
}) => (
    <Ionicons
        {...iconProps}
        onPress={() => navigation.navigate(to, data)}
    />
);

NavigateIcon.defaultProps = {
    data: {}
};

NavigateIcon.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired
    }).isRequired,
    to: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    data: PropTypes.object
};

export default NavigateIcon;
