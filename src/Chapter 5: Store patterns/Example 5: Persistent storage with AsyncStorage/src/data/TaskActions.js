import TasksActionTypes from './TasksActionTypes';
import AppDispatcher from './AppDispatcher';

const Actions = {
    addTask(task) {
        AppDispatcher.dispatch({
            type: TasksActionTypes.ADD_TASK,
            task
        });
    },
    taskFormChange(newFormState) {
        AppDispatcher.dispatch({
            type: TasksActionTypes.TASK_FORM_CHANGE,
            newFormState
        });
    }
};

export default Actions;
