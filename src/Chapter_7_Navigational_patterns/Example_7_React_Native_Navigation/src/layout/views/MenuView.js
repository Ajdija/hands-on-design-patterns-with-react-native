import React from 'react';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { Navigation } from 'react-native-navigation';

const Hamburger = () => (<Ionicons
    onPress={() => Navigation.mergeOptions('BottomMenu', {
        bottomTabs: {
            visible: false,
            drawBehind: true,
            animate: false,
            currentTabId: 'DrawerMenu'
        }
    })}
    name="navicon"
    size={32}
    color="black"
/>);

const MenuView = Hamburger;

export default MenuView;
