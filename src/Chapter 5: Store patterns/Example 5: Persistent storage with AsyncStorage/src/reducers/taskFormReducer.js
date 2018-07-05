import TasksActionTypes from '../data/TasksActionTypes';

export const INITIAL_ADD_TASK_FORM_STATE = {
    name: '',
    description: ''
};

const taskFormReducer = (
    state = INITIAL_ADD_TASK_FORM_STATE,
    action
) => {
    switch (action.type) {
    case TasksActionTypes.TASK_FORM_CHANGE:
        return action.newFormState;
    default:
        return state;
    }
};

export default taskFormReducer;
