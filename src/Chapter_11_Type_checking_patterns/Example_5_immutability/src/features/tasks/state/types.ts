import PropTypes from 'prop-types';
import { TaskType } from '../actions/TasksActionTypes';

export type TasksReducerState = Readonly<{
    entities: TaskType[],
    isLoading: boolean,
    hasError: boolean,
    errorMsg: string
}>

export type TasksState = {
    tasks: TasksReducerState
};

export const TaskPropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired
});
