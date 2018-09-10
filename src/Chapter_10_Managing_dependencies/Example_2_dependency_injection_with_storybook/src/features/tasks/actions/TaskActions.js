import TasksActionTypes from './TasksActionTypes';

export const ActionCreators = {
    addTask: task => ({
        type: TasksActionTypes.ADD_TASK,
        task
    }),
    fetchTasksStart: () => ({
        type: TasksActionTypes.TASKS_FETCH_START
    }),
    fetchTasksComplete: tasks => ({
        type: TasksActionTypes.TASKS_FETCH_COMPLETE,
        tasks
    }),
    fetchTasksError: error => ({
        type: TasksActionTypes.TASKS_FETCH_ERROR,
        error
    }),
    fetchTaskStart: taskId => ({
        type: TasksActionTypes.TASK_FETCH_START,
        payload: {
            taskId
        }
    }),
    fetchTaskComplete: task => ({
        type: TasksActionTypes.TASK_FETCH_COMPLETE,
        payload: {
            task
        }
    }),
    fetchTaskError: error => ({
        type: TasksActionTypes.TASK_FETCH_ERROR,
        error
    })
};

const ActionTriggers = {
    addTask: dispatch => task => dispatch(ActionCreators.addTask(task)),
    fetchTasksStart: dispatch => () => dispatch(ActionCreators.fetchTasksStart()),
    fetchTasksComplete: dispatch =>
        tasks => dispatch(ActionCreators.fetchTasksComplete(tasks)),
    fetchTasksError: dispatch =>
        error => dispatch(ActionCreators.fetchTasksError(error)),
    fetchTaskStart: dispatch =>
        taskId => dispatch(ActionCreators.fetchTaskStart(taskId)),
    fetchTaskComplete: dispatch =>
        task => dispatch(ActionCreators.fetchTaskComplete(task)),
    fetchTaskError: dispatch =>
        error => dispatch(ActionCreators.fetchTaskError(error))
};

export default ActionTriggers;
