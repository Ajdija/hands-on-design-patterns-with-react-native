import TasksActionType, { AddTaskActionType, TaskAddFormData, TaskType } from './TasksActionTypes';
import { Dispatch } from 'redux';

const addTask = (task:TaskAddFormData): AddTaskActionType => ({
    type: TasksActionType.ADD_TASK,
    task
});

export const ActionCreators = {
    addTask: addTask,
    fetchTasksStart: () => ({
        type: TasksActionType.TASKS_FETCH_START
    }),
    fetchTasksComplete: (tasks: TaskType[]) => ({
        type: TasksActionType.TASKS_FETCH_COMPLETE,
        tasks
    }),
    fetchTasksError: (error: Response) => ({
        type: TasksActionType.TASKS_FETCH_ERROR,
        error
    }),
    fetchTaskStart: (taskId: number) => ({
        type: TasksActionType.TASK_FETCH_START,
        payload: {
            taskId
        }
    }),
    fetchTaskComplete: (task: TaskType) => ({
        type: TasksActionType.TASK_FETCH_COMPLETE,
        payload: {
            task
        }
    }),
    fetchTaskError: (error: Response) => ({
        type: TasksActionType.TASK_FETCH_ERROR,
        error
    })
};

const ActionTriggers = {
    addTask: (dispatch: Dispatch<any>) => (task: TaskType) => dispatch(ActionCreators.addTask(task)),
    fetchTasksStart: (dispatch: Dispatch<any>) => () => dispatch(ActionCreators.fetchTasksStart()),
    fetchTasksComplete: (dispatch: Dispatch<any>) =>
        (tasks: TaskType[]) => dispatch(ActionCreators.fetchTasksComplete(tasks)),
    fetchTasksError: (dispatch: Dispatch<any>) =>
        (error: Response) => dispatch(ActionCreators.fetchTasksError(error)),
    fetchTaskStart: (dispatch: Dispatch<any>) =>
        (taskId: number) => dispatch(ActionCreators.fetchTaskStart(taskId)),
    fetchTaskComplete: (dispatch: Dispatch<any>) =>
        (task: TaskType) => dispatch(ActionCreators.fetchTaskComplete(task)),
    fetchTaskError: (dispatch: Dispatch<any>) =>
        (error: Response) => dispatch(ActionCreators.fetchTaskError(error))
};

export default ActionTriggers;
