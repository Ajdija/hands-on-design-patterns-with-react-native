import { createSelector } from 'reselect';

export const tasksSelector = state => state.tasks;

export const tasksEntitiesSelector = createSelector(
    tasksSelector,
    tasks => (tasks ? tasks.get('entities') : null)
);

export const tasksIsLoadingSelector = createSelector(
    tasksSelector,
    tasks => (tasks ? tasks.get('isLoading') : null)
);

export const tasksHasErrorSelector = createSelector(
    tasksSelector,
    tasks => (tasks ? tasks.get('hasError') : null)
);

export const tasksErrorMsgSelector = createSelector(
    tasksSelector,
    tasks => (tasks ? tasks.get('errorMsg') : null)
);

export const getTaskById = taskId => createSelector(
    tasksEntitiesSelector,
    entities => (entities
        ? entities.find(task => task.id === taskId)
        : null)
);

