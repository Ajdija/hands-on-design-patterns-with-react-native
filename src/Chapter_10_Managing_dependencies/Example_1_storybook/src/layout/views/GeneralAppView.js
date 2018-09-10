import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import NavIonicons from '../../components/NavigateIcon';
import MenuView from './MenuView';

const GeneralAppView = props => (
    <View style={styles.appContainer}>
        <View style={styles.header}>
            <View style={styles.headerTitleContainer}>
                <Text style={styles.headerText}>Tasks</Text>
            </View>
            <View style={styles.headerMenuIcon}>
                <MenuView />
            </View>
        </View>
        <ScrollView style={styles.content}>
            {props.content}
        </ScrollView>
        <View style={styles.footer}>
            <NavIonicons
                to="Home"
                name="md-home"
                size={32}
                color="white"
            />
            <NavIonicons
                to="Search"
                name="md-search"
                size={32}
                color="white"
            />
            <NavIonicons
                to="Notifications"
                name="md-notifications"
                size={32}
                color="white"
            />
        </View>
    </View>
);

export default GeneralAppView;

GeneralAppView.propTypes = {
    content: PropTypes.element.isRequired
};

export const styles = StyleSheet.create({
    appContainer: { flex: 1, backgroundColor: '#fff' },
    headerText: { fontSize: 35 },
    headerMenuIcon: { justifyContent: 'center' },
    headerTitleContainer: { flex: 1 },
    header: {
        flexDirection: 'row',
        marginTop: 30,
        height: 45,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10
    },
    content: { flex: 1, paddingLeft: 10, paddingRight: 10 },
    contentText: { fontSize: 20 },
    footer: {
        backgroundColor: '#4867AD',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        borderTopColor: '#000000',
        borderTopWidth: 1,
        paddingLeft: 10,
        paddingRight: 10
    },
    footerText: { color: '#ffffff', fontSize: 30 }
});
