import Immutable from 'immutable';
import TasksActionTypes from '../actions/TasksActionTypes';

const taskReducer = (state = Immutable.Map({
    entities: Immutable.List([]),
    isLoading: false,
    hasError: false,
    errorMsg: ''
}), action) => {
    switch (action.type) {
    case TasksActionTypes.ADD_TASK: {
        if (!action.task.name) {
            return state;
        }
        return state.update('entities', entities => entities.push({
            name: action.task.name,
            description: action.task.description,
            likes: 0
        }));
    }
    case TasksActionTypes.TASK_FETCH_START: {
        return state.update('isLoading', () => true);
    }
    case TasksActionTypes.TASK_FETCH_COMPLETE: {
        const noLoading = state.update('isLoading', () => false);
        return noLoading.update('entities', entities => (
            action.tasks.reduce((acc, task) => acc.push({
                id: task.id,
                name: task.name,
                description: task.description,
                likes: 0
            }), entities)
        ));
    }
    case TasksActionTypes.TASK_FETCH_ERROR: {
        const noLoading = state.update('isLoading', () => false);
        const errorState = noLoading.update('hasError', () => true);
        return errorState.update('errorMsg', () => action.error.message);
    }
    default: {
        return state;
    }
    }
};

export default taskReducer;
