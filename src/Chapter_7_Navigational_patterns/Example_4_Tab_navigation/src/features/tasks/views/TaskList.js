import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button } from 'react-native';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import NavigateButton from '../../../components/NavigateButton';

const TaskList = ({
    tasks, isLoading, hasError, errorMsg
}) => (
    <View>
        {hasError &&
            <View>
                <Text>{errorMsg}</Text>
            </View>}
        {hasError && isLoading &&
            <View>
                <Text>Fetching again...</Text>
            </View>}
        {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
        {tasks.map((task, index) => (
            <View
                style={[
                    styles.task,
                    index === 0 ? null : styles.borderTop
                ]}
                key={task.name}
            >
                <View style={styles.taskText}>
                    <Text style={styles.taskName}>
                        {task.name}
                    </Text>
                    <Text>{task.description}</Text>
                </View>
                <View style={styles.taskActions}>
                    <NavigateButton
                        data={{ taskId: task.id }}
                        to="Task"
                        text="Details"
                    />
                </View>
            </View>

        ))}
    </View>
);

TaskList.defaultProps = {
    errorMsg: 'Error has occurred while fetching tasks.'
};

TaskList.propTypes = {
    tasks: ImmutablePropTypes.listOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired
    })).isRequired,
    isLoading: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string
};

const styles = StyleSheet.create({
    task: {
        flex: 1,
        flexDirection: 'row'
    },
    taskActions: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    taskText: {
        width: '70%'
    },
    taskName: { fontSize: 25 },
    taskDescription: { fontSize: 20 },
    taskLikes: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    borderTop: {
        borderTopColor: '#E9EBEE',
        borderTopWidth: 2,
        marginTop: 10,
        paddingTop: 10
    }
});

export default TaskList;
