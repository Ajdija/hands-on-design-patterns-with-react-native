import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import makeExpandable from './makeExpandable';

const ExpandableTask = makeExpandable(Task);

export const TaskList = ({tasks, containerStyles}) => (
    <View style={containerStyles}>
        {tasks.map(task =>
            <ExpandableTask
                key={task.name + task.description}
                name={task.name}
                description={task.description}
            />
        )}
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: '10%',
        justifyContent: 'center',
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
