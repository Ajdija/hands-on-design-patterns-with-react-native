import PropTypes from 'prop-types';
import { TaskType } from '../actions/TasksActionTypes';

export type TasksReducerState = Readonly<{
    readonly entities: ReadonlyArray<TaskType>,
    readonly isLoading: boolean,
    readonly hasError: boolean,
    readonly errorMsg: string
}>

export type TasksState = {
    readonly tasks: TasksReducerState
};

export const TaskPropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired
});
