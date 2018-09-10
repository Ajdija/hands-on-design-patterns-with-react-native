import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import React from 'react';
import { View, Text } from 'react-native';
import TaskListScrn from './TaskListScreen';
import TaskDetailsScrn from './TaskDetailsScreen';
import withGeneralLayout from '../layout/hocs/withGeneralLayout';

export const TaskStackNavigator = createStackNavigator({
    TaskList: {
        screen: TaskListScrn,
        path: 'project/task/list', // later on: 'project/:projectId/task/list'
        navigationOptions: { header: null }
    },
    Task: {
        screen: TaskDetailsScrn,
        path: 'project/task/:taskId',
        navigationOptions: ({ navigation }) => ({
            title: `Task ${navigation.state.params.taskId} details`
        })
    },
    ProjectList: {
        screen: () => (
            <View>
                <Text>Under construction.</Text>
            </View>
        ),
        path: 'project/:projectId'
    }
}, {
    initialRouteName: 'TaskList',
    initialRouteParams: {},
    tabBarVisible: false
});

export const SearchScreen = withGeneralLayout(() => (
    <View>
        <Text>Search placeholder. Under construction.</Text>
    </View>
));

export const NotificationsScreen = withGeneralLayout(() => (
    <View>
        <Text>Notifications placeholder. Under construction.</Text>
    </View>
));

export const TabNavigation = createBottomTabNavigator(
    {
        Home: TaskStackNavigator,
        Search: SearchScreen,
        Notifications: NotificationsScreen
    },
    {
        initialRouteName: 'Home',
        initialRouteParams: {},
        navigationOptions: () => ({
            tabBarVisible: false
        })
    }
);

export const ProfileScreen = withGeneralLayout(() => (
    <View>
        <Text>Profile placeholder. Under construction.</Text>
    </View>
));

export const SettingsScreen = withGeneralLayout(() => (
    <View>
        <Text>Settings placeholder. Under construction.</Text>
    </View>
));

export default createDrawerNavigator({
    Home: TabNavigation,
    Profile: ProfileScreen,
    Settings: SettingsScreen
});
