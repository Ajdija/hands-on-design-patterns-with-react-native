import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import taskReducer from '../reducers/taskReducer';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({ tasks: taskReducer });
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
