import TasksActionType from './TasksActionTypes';

export type FetchTaskStartActionType = {
    readonly type: TasksActionType,
    readonly payload: {
        readonly taskId: string
    }
};
