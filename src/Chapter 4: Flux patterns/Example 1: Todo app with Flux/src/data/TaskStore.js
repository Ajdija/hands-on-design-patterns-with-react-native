import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';
import TasksActionTypes from './TasksActionTypes';
import AppDispatcher from './AppDispatcher';

class TaskStore extends ReduceStore {
    constructor() {
        super(AppDispatcher);
    }

    getInitialState() {
        return Immutable.List([]);
    }

    reduce(state, action) {
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
    }
}

export default new TaskStore();
