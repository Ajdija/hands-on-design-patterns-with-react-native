import TasksActionTypes from './TasksActionTypes';
import AppDispatcher from './AppDispatcher';

const Actions = {
    addTask(task) {
        AppDispatcher.dispatch({
            type: TasksActionTypes.ADD_TASK,
            task
        });
    }
};

export default Actions;
