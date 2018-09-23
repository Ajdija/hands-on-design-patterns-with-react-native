import { FetchError } from 'node-fetch';

enum TasksActionType {
    ADD_TASK = 'ADD_TASK',
    TASKS_FETCH_START = 'TASKS_FETCH_START',
    TASKS_FETCH_COMPLETE = 'TASKS_FETCH_COMPLETE',
    TASKS_FETCH_ERROR = 'TASKS_FETCH_ERROR',
    TASK_FETCH_START = 'TASK_FETCH_START',
    TASK_FETCH_COMPLETE = 'TASK_FETCH_COMPLETE',
    TASK_FETCH_ERROR = 'TASK_FETCH_ERROR'
}

export type TaskAddFormData = Readonly<{
    readonly name: string,
    readonly description: string
}>

export type TaskType = Readonly<TaskAddFormData & {
    readonly likes: number,
    readonly id: number
}>

export type AddTaskActionType = Readonly<{
    readonly type: TasksActionType.ADD_TASK,
    readonly task: TaskAddFormData
}>;

export type TasksFetchActionType = Readonly<{
    readonly type: TasksActionType.TASKS_FETCH_START,
}>;

export type TasksFetchCompleteActionType = Readonly<{
    readonly type: TasksActionType.TASKS_FETCH_COMPLETE,
    readonly tasks: ReadonlyArray<TaskType>
}>;

export type TasksFetchErrorActionType = Readonly<{
    readonly type: TasksActionType.TASKS_FETCH_ERROR,
    readonly error: FetchError
}>;

export type TaskFetchActionType = Readonly<{
    readonly type: TasksActionType.TASK_FETCH_START,
    readonly taskId: number
}>;

export type TaskFetchCompleteActionType = Readonly<{
    readonly type: TasksActionType.TASK_FETCH_COMPLETE,
    readonly task: TaskType
}>;

export type TaskFetchErrorActionType = Readonly<{
    readonly type: TasksActionType.TASK_FETCH_ERROR,
    readonly error: FetchError
}>;

export type TaskReduxActionType =
    AddTaskActionType |
    TasksFetchActionType | TasksFetchCompleteActionType | TasksFetchErrorActionType
    | TaskFetchActionType | TaskFetchCompleteActionType | TaskFetchErrorActionType;

export default TasksActionType;
