import React from 'react';
import Immutable from 'immutable';

import { storiesOf } from '@storybook/react-native';
import TaskList from '../views/TaskList';
import exampleData from '../data/tasks.json';
import scrollViewDecorator from '../../../common/utils/scrollViewDecorator';
import NavButtonExample from '../../../common/NavigateButton/examples';

storiesOf('TaskList', module)
    .addDecorator(scrollViewDecorator)
    .add('with one task', () => (
        <TaskList
            tasks={Immutable.List([exampleData.tasks[0]])}
            hasError={false}
            isLoading={false}
            NavButton={NavButtonExample}
        />
    ))
    .add('with 7 tasks', () => (
        <TaskList
            tasks={Immutable.List(exampleData.tasks)}
            hasError={false}
            isLoading={false}
            NavButton={NavButtonExample}
        />
    ))
    .add('with loading state', () => (
        <TaskList
            tasks={Immutable.List([])}
            hasError={false}
            isLoading
            NavButton={NavButtonExample}
        />
    ))
    .add('with error', () => (
        <TaskList
            tasks={Immutable.List([])}
            errorMsg="Custom error: Unable to download stories"
            hasError
            isLoading={false}
            NavButton={NavButtonExample}
        />
    ))
    .add('with error and loading', () => (
        <TaskList
            tasks={Immutable.List([])}
            errorMsg="Custom error: Unable to download stories"
            hasError
            isLoading
            NavButton={NavButtonExample}
        />
    ));
