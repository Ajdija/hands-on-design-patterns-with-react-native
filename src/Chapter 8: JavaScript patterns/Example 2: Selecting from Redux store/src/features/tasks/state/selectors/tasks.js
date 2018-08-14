export const tasksSelector = state => state.tasks;

export const tasksEntitiesSelector = state =>
    (tasksSelector(state) ? tasksSelector(state).get('entities') : null);

export const tasksIsLoadingSelector = state =>
    (tasksSelector(state) ? tasksSelector(state).get('isLoading') : null);

export const tasksHasErrorSelector = state =>
    (tasksSelector(state) ? tasksSelector(state).get('hasError') : null);

export const tasksErrorMsgSelector = state =>
    (tasksSelector(state) ? tasksSelector(state).get('errorMsg') : null);

export const getTaskById = (state, taskId) =>
    (tasksEntitiesSelector(state)
        ? tasksEntitiesSelector(state).find(task => task.id === taskId)
        : null);
