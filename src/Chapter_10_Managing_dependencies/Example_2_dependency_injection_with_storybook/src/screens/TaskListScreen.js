import React from 'react';
import { View } from 'react-native';
import withGeneralLayout from '../layout/hocs/withGeneralLayout';
import AddTaskContainer from '../features/tasks/containers/AddTaskContainer';
import TaskListContainer from '../features/tasks/containers/TaskListContainer';

export const TaskListScreen = () => (
    <View>
        <AddTaskContainer />
        <TaskListContainer />
    </View>
);

export default withGeneralLayout(TaskListScreen);
