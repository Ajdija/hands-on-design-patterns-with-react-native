import TasksActionTypes from './TasksActionTypes';
import AppDispatcher from './AppDispatcher';

const Actions = {
    addTask(task) {
        AppDispatcher.dispatch({
            type: TasksActionTypes.ADD_TASK,
            task
        });
    },
    fetchStart() {
        AppDispatcher.dispatch({
            type: TasksActionTypes.TASK_FETCH_START
        });
    },
    fetchComplete(tasks) {
        AppDispatcher.dispatch({
            type: TasksActionTypes.TASK_FETCH_COMPLETE,
            tasks
        });
    },
    fetchError(error) {
        AppDispatcher.dispatch({
            type: TasksActionTypes.TASK_FETCH_ERROR,
            error
        });
    }
};

export default Actions;
