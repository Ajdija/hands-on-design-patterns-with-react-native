import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import taskReducers from '../features/tasks/reducers';
import watchLastFetchTasks from '../features/tasks/sagas/fetchTasks';

function* rootSaga() {
    yield all([watchLastFetchTasks]);
}

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ tasks: taskReducers.tasks });
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
