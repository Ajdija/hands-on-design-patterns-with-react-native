import TasksActionTypes from './TasksActionTypes';

export const ActionCreators = {
    addTask: task => ({
        type: TasksActionTypes.ADD_TASK,
        task
    }),
    fetchStart: () => ({
        type: TasksActionTypes.TASK_FETCH_START
    }),
    fetchComplete: tasks => ({
        type: TasksActionTypes.TASK_FETCH_COMPLETE,
        tasks
    }),
    fetchError: error => ({
        type: TasksActionTypes.TASK_FETCH_ERROR,
        error
    })
};

const ActionTriggers = {
    addTask: dispatch => task => dispatch(ActionCreators.addTask(task)),
    fetchStart: dispatch => () => dispatch(ActionCreators.fetchStart()),
    fetchComplete: dispatch =>
        tasks => dispatch(ActionCreators.fetchComplete(tasks)),
    fetchError: dispatch =>
        error => dispatch(ActionCreators.fetchError(error))
};

export default ActionTriggers;
