import Immutable from 'immutable';
import TasksActionTypes from '../data/TasksActionTypes';

const taskReducer = (state = Immutable.List([]), action) => {
    switch (action.type) {
    case TasksActionTypes.ADD_TASK:
        if (!action.task.name) {
            return state;
        }
        return state.push({
            name: action.task.name,
            description: action.task.description,
            likes: 0
        });
    default:
        return state;
    }
};

export default taskReducer;
