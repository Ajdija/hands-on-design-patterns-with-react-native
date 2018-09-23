import * as React from 'react';

import { storiesOf } from '@storybook/react-native';
import TaskList from '../views/TaskList';
import exampleData from '../data/tasks.json';
import scrollViewDecorator from '../../../common/utils/scrollViewDecorator';
import NavButtonExample from '../../../common/NavigateButton/examples';

storiesOf('TaskList', module)
    .addDecorator(scrollViewDecorator)
    .add('with one task', () => (
        <TaskList
            tasks={[exampleData.tasks[0]]}
            hasError={false}
            isLoading={false}
            NavButton={NavButtonExample}
        />
    ))
    .add('with 7 tasks', () => (
        <TaskList
            tasks={exampleData.tasks}
            hasError={false}
            isLoading={false}
            NavButton={NavButtonExample}
        />
    ))
    .add('with loading state', () => (
        <TaskList
            tasks={[]}
            hasError={false}
            isLoading={true}
            NavButton={NavButtonExample}
        />
    ))
    .add('with error', () => (
        <TaskList
            tasks={[]}
            errorMsg="Custom error: Unable to download stories"
            hasError={true}
            isLoading={false}
            NavButton={NavButtonExample}
        />
    ))
    .add('with error and loading', () => (
        <TaskList
            tasks={[]}
            errorMsg="Custom error: Unable to download stories"
            hasError={true}
            isLoading={true}
            NavButton={NavButtonExample}
        />
    ));
