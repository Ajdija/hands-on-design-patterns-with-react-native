import { createStackNavigator } from 'react-navigation';
import React from 'react';
import { View, Text } from 'react-native';
import TaskListScrn from './TaskListScreen';

export default createStackNavigator({
    TaskList: {
        screen: TaskListScrn,
        path: 'project/task/list', // later on: 'project/:projectId/task/list'
        navigationOptions: { header: null }
    },
    ProjectList: {
        screen: () => <View><Text>Under construction.</Text></View>,
        path: 'project/:projectId'
    },
    Task: {
        screen: () => <View><Text>Under construction.</Text></View>,
        path: 'project/:projectId/task/:taskId'
    }
}, {
    initialRouteName: 'TaskList',
    initialRouteParams: {}
});
