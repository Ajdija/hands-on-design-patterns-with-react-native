import PropTypes from 'prop-types';
import Immutable from 'immutable';

export type TasksReducerState = Immutable.Map<string, any>;

export type TasksState = {
    tasks: TasksReducerState
};

export const TaskPropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired
});
