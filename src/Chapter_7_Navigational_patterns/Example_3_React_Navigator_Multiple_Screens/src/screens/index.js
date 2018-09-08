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
    Task: {
        screen: () => <View><Text>Under construction.</Text></View>,
        path: 'project/task/:taskId',
        navigationOptions: ({ navigation }) => ({
            title: `Task ${navigation.state.params.taskId} details`
        })
    },
    ProjectList: {
        screen: () => <View><Text>Under construction.</Text></View>,
        path: 'project/:projectId'
    }
}, {
    initialRouteName: 'TaskList',
    initialRouteParams: {}
});
