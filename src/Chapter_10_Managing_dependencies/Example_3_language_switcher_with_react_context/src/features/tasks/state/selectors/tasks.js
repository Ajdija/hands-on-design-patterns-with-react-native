import { createSelector } from 'reselect';
import Maybe from '../../../../utils/Maybe';

export const tasksSelector = state => Maybe(state).map(x => x.tasks);

export const tasksEntitiesSelector = createSelector(
    tasksSelector,
    maybeTasks => maybeTasks.map(tasks => tasks.get('entities'))
);

export const tasksIsLoadingSelector = createSelector(
    tasksSelector,
    maybeTasks => maybeTasks.map(tasks => tasks.get('isLoading'))
);

export const tasksHasErrorSelector = createSelector(
    tasksSelector,
    maybeTasks => maybeTasks.map(tasks => tasks.get('hasError'))
);

export const tasksErrorMsgSelector = createSelector(
    tasksSelector,
    maybeTasks => maybeTasks.map(tasks => tasks.get('errorMsg'))
);

export const getTaskById = taskId => createSelector(
    tasksEntitiesSelector,
    entities => entities.map(e => e.find(task => task.id === taskId))
);

