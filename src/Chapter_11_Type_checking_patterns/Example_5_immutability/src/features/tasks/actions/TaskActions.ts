import TasksActionType, {
    AddTaskActionType,
    TaskAddFormData, TaskFetchActionType, TaskFetchCompleteActionType, TaskFetchErrorActionType,
    TasksFetchActionType,
    TasksFetchCompleteActionType,
    TasksFetchErrorActionType,
    TaskType
} from './TasksActionTypes';
import { Dispatch } from 'redux';
import { FetchError } from 'node-fetch';

const addTask = (task:TaskAddFormData): AddTaskActionType => ({
    task,
    type: TasksActionType.ADD_TASK
});

const fetchTasksStart = (): TasksFetchActionType => ({
    type: TasksActionType.TASKS_FETCH_START
});

const fetchTasksComplete = (tasks: TaskType[]):TasksFetchCompleteActionType => ({
    tasks,
    type: TasksActionType.TASKS_FETCH_COMPLETE
});

const fetchTasksError = (error: FetchError):TasksFetchErrorActionType => ({
    error,
    type: TasksActionType.TASKS_FETCH_ERROR
});

const fetchTaskStart = (taskId: number):TaskFetchActionType => ({
    taskId,
    type: TasksActionType.TASK_FETCH_START
});

const fetchTaskComplete = (task: TaskType):TaskFetchCompleteActionType => ({
    task,
    type: TasksActionType.TASK_FETCH_COMPLETE
});

const fetchTaskError = (error: FetchError):TaskFetchErrorActionType => ({
    error,
    type: TasksActionType.TASK_FETCH_ERROR,
});

export const ActionCreators = {
    addTask,
    fetchTasksStart,
    fetchTasksComplete,
    fetchTasksError,
    fetchTaskStart,
    fetchTaskComplete,
    fetchTaskError
};

const ActionTriggers = {
    addTask:
        (dispatch: Dispatch<any>) => (task: TaskType) => dispatch(ActionCreators.addTask(task)),
    fetchTasksStart: (dispatch: Dispatch<any>) => () => dispatch(ActionCreators.fetchTasksStart()),
    fetchTasksComplete: (dispatch: Dispatch<any>) =>
        (tasks: TaskType[]) => dispatch(ActionCreators.fetchTasksComplete(tasks)),
    fetchTasksError: (dispatch: Dispatch<any>) =>
        (error: FetchError) => dispatch(ActionCreators.fetchTasksError(error)),
    fetchTaskStart: (dispatch: Dispatch<any>) =>
        (taskId: number) => dispatch(ActionCreators.fetchTaskStart(taskId)),
    fetchTaskComplete: (dispatch: Dispatch<any>) =>
        (task: TaskType) => dispatch(ActionCreators.fetchTaskComplete(task)),
    fetchTaskError: (dispatch: Dispatch<any>) =>
        (error: FetchError) => dispatch(ActionCreators.fetchTaskError(error))
};

export default ActionTriggers;
