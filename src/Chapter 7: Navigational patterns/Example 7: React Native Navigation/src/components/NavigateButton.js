import React from 'react';
import { Button } from 'react-native';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';

export const NavigateButton = ({
    to, data, text
}) => (
    <Button
        onPress={() => Navigation.mergeOptions('BottomMenu', {
            bottomTabs: {
                visible: false,
                drawBehind: true,
                animate: false,
                currentTabId: to
            }
        })}
        title={text}
    />
);

NavigateButton.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    data: PropTypes.object.isRequired
};

export default NavigateButton;
