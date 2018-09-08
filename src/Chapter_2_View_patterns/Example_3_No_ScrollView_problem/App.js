import React from 'react';
import TaskList from './src/TaskList';

export const placeholderTasks = [
    {
        name: 'Task 1',
        description: 'React Native design patterns book!!!'
    },
    {
        name: 'React vs Angular',
        description: 'React > Angular'
    },
    {
        name: 'Random task',
        description: 'to do or not to do'
    },
    {
        name: 'Coffee',
        description: 'Vienna pls'
    },
    {
        name: 'Write tests',
        description: 'Meh...'
    },
    {
        name: 'Boring task 1',
        description: 'soooo boring.... 1... 2... 3...'
    },
    {
        name: 'Boring task 2',
        description: 'soooo boring.... 1... 2... 3...'
    },
    {
        name: 'Boring task 3',
        description: 'soooo boring.... 1... 2... 3...'
    },
    {
        name: 'Boring task 4',
        description: 'soooo boring.... 1... 2... 3...'
    },
    {
        name: 'Boring task 5',
        description: 'soooo boring.... 1... 2... 3...'
    },
    {
        name: 'Boring task 6',
        description: 'soooo boring.... 1... 2... 3...'
    },
    {
        name: 'Boring task 7',
        description: 'soooo boring.... 1... 2... 3...'
    },
    {
        name: 'Boring task 8',
        description: 'soooo boring.... 1... 2... 3...'
    },
    {
        name: 'Boring task 9',
        description: 'soooo boring.... 1... 2... 3...'
    },
    {
        name: 'Boring task 10',
        description: 'soooo boring.... 1... 2... 3...'
    },
    {
        name: 'Boring task 11',
        description: 'soooo boring.... 1... 2... 3...'
    },
    {
        name: 'Boring task 12',
        description: 'soooo boring.... 1... 2... 3...'
    }
];

export default () => <TaskList tasks={placeholderTasks} />;
