import React from 'react';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';

export const NavigateIcon = props => (<Ionicons
    {...props}
    onPress={() => Navigation.mergeOptions('BottomMenu', {
        bottomTabs: {
            visible: false,
            drawBehind: true,
            animate: false,
            currentTabId: props.to
        }
    })}
/>);

NavigateIcon.defaultProps = {
    data: {}
};

NavigateIcon.propTypes = {
    to: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    data: PropTypes.object
};

export default NavigateIcon;
