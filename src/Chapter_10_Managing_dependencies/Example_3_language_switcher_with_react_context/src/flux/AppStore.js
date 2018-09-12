import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import tasksReducers from '../features/tasks/state/reducers';
import watchLastFetchTasks from '../features/tasks/sagas/fetchTasks';
import watchLastFetchTask from '../features/tasks/sagas/fetchTask';
import languageReducer from '../features/language/state/reducer';

function* rootSaga() {
    yield all([watchLastFetchTasks, watchLastFetchTask]);
}

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
    tasks: tasksReducers.tasks,
    ...languageReducer
});
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
