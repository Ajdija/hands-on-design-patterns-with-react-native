import {
    createStackNavigator,
    createBottomTabNavigator,
    createDrawerNavigator
} from 'react-navigation';
import React from 'react';
import { View, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import TaskListScrn from './TaskListScreen';
import withGeneralLayout from '../layout/hocs/withGeneralLayout';
import store from '../flux/AppStore';

export const TaskStackNavigator = createStackNavigator({
    TaskList: {
        screen: TaskListScrn,
        path: 'project/task/list', // later on: 'project/:projectId/task/list'
        navigationOptions: { header: null }
    },
    Task: {
        screen: () => (
            <View>
                <Text>Under construction.</Text>
            </View>
        ),
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

Navigation.registerComponent('HDPRN.TabNavigation.TaskList', () => SearchScreen, store, Provider);
Navigation.registerComponent('HDPRN.TabNavigation.SearchScreen', () => SearchScreen, store, Provider);
Navigation.registerComponent('HDPRN.TabNavigation.NotificationsScreen', () => NotificationsScreen, store, Provider);
export const TabNavigation = () => Navigation.startTabBasedApp({
    tabs: [
        {
            // tab label as appears under the icon in iOS (optional)
            label: 'Tasks',
            // unique ID registered with Navigation.registerScreen
            screen: 'HDPRN.TabNavigation.TaskList',
            // title of the screen as appears in the nav bar (optional)
            title: 'Task List'
        },
        {
            // tab label as appears under the icon in iOS (optional)
            label: 'Search',
            // unique ID registered with Navigation.registerScreen
            screen: 'HDPRN.TabNavigation.SearchScreen',
            // title of the screen as appears in the nav bar (optional)
            title: 'Search application tasks'
        },
        {
            // tab label as appears under the icon in iOS (optional)
            label: 'Notifications',
            // unique ID registered with Navigation.registerScreen
            screen: 'HDPRN.TabNavigation.NotificationsScreen',
            // title of the screen as appears in the nav bar (optional)
            title: 'Recent Notifications'
        }
    ]
});

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

export default () => Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'HDPRN.TabNavigation.TaskList'
            },
            bottomTabs: {
                children: [
                    {
                        stack: {
                            children: [{
                                component: {
                                    name: 'HDPRN.TabNavigation.TaskList'
                                }
                            }],
                            options: {
                                bottomTab: {
                                    text: 'Tasks',
                                    testID: 'FIRST_TAB_BAR_BUTTON'
                                }
                            }
                        }
                    },
                    {
                        component: {
                            name: 'HDPRN.TabNavigation.SearchScreen',
                            options: {
                                bottomTab: {
                                    text: 'Search',
                                    testID: 'SEARCH_BOTTOM_ICON'
                                }
                            }
                        }
                    }
                ]
            }
        }
    });
});
