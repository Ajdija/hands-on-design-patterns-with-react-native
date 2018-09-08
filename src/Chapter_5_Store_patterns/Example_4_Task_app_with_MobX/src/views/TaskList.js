import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const TaskList = ({ tasks }) => (
    <View>
        {tasks.map((task, index) => (
            <View
                style={[
                    styles.task,
                    index === 0 ? null : styles.borderTop
                ]}
                key={task.name}
            >
                <View style={styles.taskText}>
                    <Text style={styles.taskName}>{task.name}</Text>
                    <Text>{task.description}</Text>
                </View>
            </View>
        ))}
    </View>
);

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired
    })).isRequired
};

const styles = StyleSheet.create({
    task: {
        flex: 1,
        flexDirection: 'row'
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
