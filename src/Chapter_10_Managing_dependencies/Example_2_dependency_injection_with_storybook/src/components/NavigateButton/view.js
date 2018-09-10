    import React from 'react';
import { Button } from 'react-native';
import PropTypes from 'prop-types';

export const NavigateButton = ({
    navigation, to, data, text
}) => (
    <Button
        onPress={() => navigation.navigate(to, data)}
        title={text}
    />
);

NavigateButton.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired
    }).isRequired,
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    data: PropTypes.object.isRequired
};

export default NavigateButton;
