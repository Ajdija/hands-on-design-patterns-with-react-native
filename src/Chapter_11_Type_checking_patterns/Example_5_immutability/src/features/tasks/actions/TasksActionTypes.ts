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

export type TaskAddFormData = {
    name: string,
    description: string
}

export type TaskType = TaskAddFormData & {
    likes: number,
    id: number
}

export type AddTaskActionType = {
    type: TasksActionType.ADD_TASK,
    task: TaskAddFormData
};

export type TasksFetchActionType = {
    type: TasksActionType.TASKS_FETCH_START,
};

export type TasksFetchCompleteActionType = {
    type: TasksActionType.TASKS_FETCH_COMPLETE,
    tasks: TaskType[]
};

export type TasksFetchErrorActionType = {
    type: TasksActionType.TASKS_FETCH_ERROR,
    error: FetchError
};

export type TaskFetchActionType = {
    type: TasksActionType.TASK_FETCH_START,
    taskId: number
};

export type TaskFetchCompleteActionType = {
    type: TasksActionType.TASK_FETCH_COMPLETE,
    task: TaskType
};

export type TaskFetchErrorActionType = {
    type: TasksActionType.TASK_FETCH_ERROR,
    error: FetchError
};

export type TaskReduxActionType =
    AddTaskActionType |
    TasksFetchActionType | TasksFetchCompleteActionType | TasksFetchErrorActionType
    | TaskFetchActionType | TaskFetchCompleteActionType | TaskFetchErrorActionType;

export default TasksActionType;
