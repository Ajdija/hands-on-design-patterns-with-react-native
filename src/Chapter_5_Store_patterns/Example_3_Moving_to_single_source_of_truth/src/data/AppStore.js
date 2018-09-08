import { combineReducers, createStore } from 'redux';
import taskReducer from '../reducers/taskReducer';
import taskFormReducer from '../reducers/taskFormReducer';

const rootReducer = combineReducers({
    tasks: taskReducer,
    taskForm: taskFormReducer
});
const store = createStore(rootReducer);
export default store;
