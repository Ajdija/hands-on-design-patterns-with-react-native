import Immutable from 'immutable';
import TasksActionTypes from '../../actions/TasksActionTypes';

const updateTasksState = (tasksInState, tasksToBeAdded) => {
    const presentIds = tasksInState.map(e => e.id);
    const tasksToBeAddedReducer =
        (acc, task) =>
            (!presentIds.includes(task.id)
                // New item so add...
                ? acc.push({
                    id: task.id,
                    name: task.name,
                    description: task.description,
                    likes: task.likes
                })
                // Item already in collection, find index and replace
                : acc.set(acc.findIndex(t => t.id === task.id), task));

    return tasksToBeAdded.reduce(tasksToBeAddedReducer, tasksInState);
};

const tasksReducer = (state = Immutable.Map({
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
            id: entities.size + 1,
            name: action.task.name,
            description: action.task.description,
            likes: 0
        }));
    }
    case TasksActionTypes.TASKS_FETCH_START: {
        return state.update('isLoading', () => true);
    }
    case TasksActionTypes.TASK_FETCH_COMPLETE: {
        return state
            .update(
                'entities',
                entities => updateTasksState(
                    entities,
                    Immutable.List([action.payload.task])
                )
            )
            .update('isLoading', () => false);
    }
    case TasksActionTypes.TASKS_FETCH_COMPLETE: {
        return state
            .update(
                'entities',
                entities => updateTasksState(entities, action.tasks)
            )
            .update('isLoading', () => false);
    }
    case TasksActionTypes.TASKS_FETCH_ERROR: {
        const noLoading = state.update('isLoading', () => false);
        const errorState = noLoading.update('hasError', () => true);
        return errorState.update('errorMsg', () => action.error.message);
    }
    default: {
        return state;
    }
    }
};

export default tasksReducer;
