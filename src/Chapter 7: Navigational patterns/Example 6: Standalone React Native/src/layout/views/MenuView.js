import { withNavigation } from 'react-navigation';
import React from 'react';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/FontAwesome';

const Hamburger = props => (<Ionicons
    onPress={() => props.navigation.toggleDrawer()}
    name="navicon"
    size={32}
    color="black"
/>);

Hamburger.propTypes = {
    navigation: PropTypes.shape({
        toggleDrawer: PropTypes.func.isRequired
    }).isRequired
};

const MenuView = withNavigation(Hamburger);

export default MenuView;
