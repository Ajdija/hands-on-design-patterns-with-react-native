import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types';
import {StyleSheet, Text, ScrollView, View} from 'react-native';
import makeExpandable from './makeExpandable';

const ExpandableTask = makeExpandable(Task);

export const TaskList = ({tasks, containerStyles}) => (
    <ScrollView
        contentContainerStyle={containerStyles}>
        {tasks.map(task =>
            <ExpandableTask
                key={task.name + task.description}
                name={task.name}
                description={task.description}
            />
        )}
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: 10,
        paddingLeft: 10
    }
});

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })),
    containerStyles: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number
    ])
};

TaskList.defaultProps = {
    tasks: [],
    containerStyles: styles.container
};

export default TaskList;
