import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { inject, observer } from 'mobx-react/native';
import PropTypes from 'prop-types';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

@inject('store') @observer
class AppView extends React.Component {
    render = () => (
        <View style={styles.appContainer}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Tasks</Text>
            </View>
            <ScrollView style={styles.content}>
                <AddTaskForm />
                <TaskList tasks={this.props.store.tasks} />
            </ScrollView>
            <View style={styles.footer}>
                <Ionicons name="md-home" size={32} color="white" />
                <Ionicons name="md-search" size={32} color="white" />
                <Ionicons
                    name="md-notifications"
                    size={32}
                    color="white"
                />
            </View>
        </View>
    );
}

AppView.wrappedComponent.propTypes = {
    store: PropTypes.shape({
        tasks: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired
        })).isRequired
    }).isRequired
};

export default AppView;

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
