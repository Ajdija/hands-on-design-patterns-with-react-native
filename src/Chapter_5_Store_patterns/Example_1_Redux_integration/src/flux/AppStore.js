import { combineReducers, createStore } from 'redux';
import counterReducer from '../reducers/counterReducer';

const rootReducer = combineReducers({
    count: counterReducer
});

const store = createStore(rootReducer);

export default store;
