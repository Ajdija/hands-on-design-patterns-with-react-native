import TasksActionType from './TasksActionTypes';

export type FetchTaskStartActionType = {
    type: TasksActionType,
    payload: {
        taskId: string
    }
};
