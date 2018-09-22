import Immutable from 'immutable';
import TasksActionTypes, { TaskReduxActionType, TaskType } from '../../actions/TasksActionTypes';

const updateTasksState = (
    tasksInState: Immutable.List<TaskType>,
    tasksToBeAdded: Immutable.List<TaskType>
) => {
    const presentIds = tasksInState.map((t: (TaskType | undefined)) => t ? t.id : -1);
    const tasksToBeAddedReducer =
        (acc: (Immutable.List<TaskType> | undefined), task: (TaskType | undefined)) => {
            if (!task || !acc) {
                return;
            }
            return (!presentIds.includes(task.id)
                    // New item so add...
                    ? acc.push({
                        id: task.id,
                        name: task.name,
                        description: task.description,
                        likes: task.likes
                    })
                    // Item already in collection, find index and replace
                    : acc.set(
                        acc.findIndex(
                            (t: (TaskType | undefined)) => t ? t.id === task.id : false),
                        task)
            );
        };

    return tasksToBeAdded.reduce(tasksToBeAddedReducer, tasksInState);
};

const tasksReducer = (
    state = Immutable.Map<string, any>({
        entities: Immutable.List<TaskType>([]),
        isLoading: false,
        hasError: false,
        errorMsg: ''
    }),
    action:TaskReduxActionType
) => {
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
        return state.update(
                    'entities',
                    entities => updateTasksState(
                        entities,
                        Immutable.List<TaskType>([action.task])
                    )
            ).update('isLoading', () => false);
    }
    case TasksActionTypes.TASKS_FETCH_COMPLETE: {
        return state.update(
                'entities',
                entities => updateTasksState(
                    entities,
                    Immutable.List<TaskType>(action.tasks)
                )
            ).update('isLoading', () => false);
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
