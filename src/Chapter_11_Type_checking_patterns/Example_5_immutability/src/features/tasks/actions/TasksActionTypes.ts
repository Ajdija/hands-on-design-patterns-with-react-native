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
    name: string,
    description: string
}>

export type TaskType = Readonly<TaskAddFormData & {
    likes: number,
    id: number
}>

export type AddTaskActionType = Readonly<{
    type: TasksActionType.ADD_TASK,
    task: TaskAddFormData
}>;

export type TasksFetchActionType = Readonly<{
    type: TasksActionType.TASKS_FETCH_START,
}>;

export type TasksFetchCompleteActionType = Readonly<{
    type: TasksActionType.TASKS_FETCH_COMPLETE,
    tasks: ReadonlyArray<TaskType>
}>;

export type TasksFetchErrorActionType = Readonly<{
    type: TasksActionType.TASKS_FETCH_ERROR,
    error: FetchError
}>;

export type TaskFetchActionType = Readonly<{
    type: TasksActionType.TASK_FETCH_START,
    taskId: number
}>;

export type TaskFetchCompleteActionType = Readonly<{
    type: TasksActionType.TASK_FETCH_COMPLETE,
    task: TaskType
}>;

export type TaskFetchErrorActionType = Readonly<{
    type: TasksActionType.TASK_FETCH_ERROR,
    error: FetchError
}>;

export type TaskReduxActionType =
    AddTaskActionType |
    TasksFetchActionType | TasksFetchCompleteActionType | TasksFetchErrorActionType
    | TaskFetchActionType | TaskFetchCompleteActionType | TaskFetchErrorActionType;

export default TasksActionType;
