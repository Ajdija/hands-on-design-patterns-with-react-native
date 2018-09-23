import TasksActionTypes, { TaskReduxActionType, TaskType } from '../../actions/TasksActionTypes';
import { TasksReducerState } from '../types';

const updateTasksState = (
    tasksInState: TaskType[],
    tasksToBeAdded: TaskType[]
) => {
    const presentIds = tasksInState.map(t => t.id);
    const replaceAtIndex = (arr: TaskType[], index: number, newItem: TaskType) => arr
        .slice(0, index)
        .concat([newItem])
        .concat(arr.slice(index + 1, arr.length));
    const tasksToBeAddedReducer =
        (acc: TaskType[], task: TaskType) => {
            return (!presentIds.includes(task.id)
                    // New item so add...
                    ? [...acc, task]
                    // Item already in collection, find index and replace
                    : replaceAtIndex(acc, acc.findIndex(t => t.id === task.id), task)
            );
        };

    return tasksToBeAdded.reduce(tasksToBeAddedReducer, tasksInState);
};

const tasksReducer = (
    state:TasksReducerState = {
        entities: [],
        isLoading: false,
        hasError: false,
        errorMsg: ''
    },
    action:TaskReduxActionType
) => {
    switch (action.type) {
    case TasksActionTypes.ADD_TASK: {
        if (!action.task.name) {
            return state;
        }
        return {...state, entitites: [...state.entities, {
            id: state.entities.length + 1,
            name: action.task.name,
            description: action.task.description,
            likes: 0
        }]};
    }
    case TasksActionTypes.TASKS_FETCH_START: {
        return { ...state, isLoading: true };
    }
    case TasksActionTypes.TASK_FETCH_COMPLETE: {
        return {
            ...state,
            isLoading: false,
            entitites: updateTasksState(state.entities, [action.task])
        };
    }
    case TasksActionTypes.TASKS_FETCH_COMPLETE: {
        return {
            ...state,
            isLoading: false,
            entitites: updateTasksState(state.entities, action.tasks)
        };
    }
    case TasksActionTypes.TASKS_FETCH_ERROR: {
        return {
            ...state,
            isLoading: false,
            hasError: true,
            errorMsg: action.error.message
        };
    }
    default: {
        return state;
    }
    }
};

export default tasksReducer;
