import { withNavigation } from 'react-navigation';
import * as React from 'react';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

const Hamburger = props => (<Ionicons
    onPress={() => props.navigation.toggleDrawer()}
    name="md-menu"
    size={32}
    color="black"
/>);

Hamburger.propTypes = {
    navigation: PropTypes.shape({
        toggleDrawer: PropTypes.func.isRequired
    }).isRequired
};

const MenuTrigger = withNavigation(Hamburger);

export default MenuTrigger;
