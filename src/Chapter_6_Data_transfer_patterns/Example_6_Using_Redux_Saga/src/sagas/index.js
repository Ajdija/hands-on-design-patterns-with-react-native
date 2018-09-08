import { all } from 'redux-saga/effects';
import watchLastFetchTasks from './fetchTasks';

function* rootSaga() {
    yield all([watchLastFetchTasks()]);
}

export default rootSaga;
