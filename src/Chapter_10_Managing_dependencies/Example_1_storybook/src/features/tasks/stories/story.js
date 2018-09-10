import React from 'react';
import { ScrollView } from 'react-native';
import Immutable from 'immutable';
import { NavigationProvider } from 'react-navigation';
import { action } from '@storybook/addon-actions';

import { storiesOf } from '@storybook/react-native';
import TaskList from '../views/TaskList';
import exampleData from '../data/tasks.json';
import { styles as generalStyles }
    from '../../../layout/views/GeneralAppView';

storiesOf('TaskList', module)
    .addDecorator(getStory => (
        <NavigationProvider
            value={{
                navigate: action('navigate')
            }}
        >
            <ScrollView style={generalStyles.content}>{getStory()}</ScrollView>
        </NavigationProvider>
    ))
    .add('with one task', () => (
        <TaskList
            tasks={Immutable.List([exampleData.tasks[0]])}
            hasError={false}
            isLoading={false}
        />
    ))
    .add('with 7 tasks', () => (
        <TaskList
            tasks={Immutable.List(exampleData.tasks)}
            hasError={false}
            isLoading={false}
        />
    ))
    .add('with loading state', () => (
        <TaskList
            tasks={Immutable.List([])}
            hasError={false}
            isLoading
        />
    ))
    .add('with error', () => (
        <TaskList
            tasks={Immutable.List([])}
            errorMsg="Custom error: Unable to download stories"
            hasError
            isLoading={false}
        />
    ))
    .add('with error and loading', () => (
        <TaskList
            tasks={Immutable.List([])}
            errorMsg="Custom error: Unable to download stories"
            hasError
            isLoading
        />
    ));
