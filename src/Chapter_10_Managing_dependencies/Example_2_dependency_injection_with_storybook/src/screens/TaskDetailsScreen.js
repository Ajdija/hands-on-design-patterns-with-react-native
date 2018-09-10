import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import withOwnLayout from '../layout/hocs/withOwnLayout';
import TaskDetailsContainer from '../features/tasks/containers/TaskDetailsContainer';

export const TaskDetailsScreen = ({ navigation }) => (
    <View>
        <TaskDetailsContainer
            taskId={navigation.getParam('taskId', null)}
        />
    </View>
);

TaskDetailsScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired
    }).isRequired
};

export default withOwnLayout(TaskDetailsScreen);
