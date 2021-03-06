import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

const AppView = props => (
    <View style={styles.appContainer}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Tasks</Text>
        </View>
        <ScrollView style={styles.content}>
            <AddTaskForm />
            <TaskList
                tasks={props.tasks.get('entities')}
                isLoading={props.tasks.get('isLoading')}
                hasError={props.tasks.get('hasError')}
                errorMsg={props.tasks.get('errorMsg')}
            />
        </ScrollView>
        <View style={styles.footer}>
            <Ionicons name="md-home" size={32} color="white" />
            <Ionicons name="md-search" size={32} color="white" />
            <Ionicons name="md-notifications" size={32} color="white" />
        </View>
    </View>
);

export default AppView;

AppView.propTypes = {
    tasks: ImmutablePropTypes.mapContains({
        entities: ImmutablePropTypes.listOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired
        })).isRequired,
        isLoading: PropTypes.bool.isRequired,
        hasError: PropTypes.bool.isRequired,
        errorMsg: PropTypes.string.isRequired
    }).isRequired
};

const styles = StyleSheet.create({
    appContainer: { flex: 1, marginTop: 30 },
    headerText: { fontSize: 35 },
    header: {
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
