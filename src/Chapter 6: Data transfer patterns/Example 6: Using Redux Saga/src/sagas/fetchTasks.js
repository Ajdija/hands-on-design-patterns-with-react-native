import { call, put, throttle } from 'redux-saga/es/effects';
import Immutable from 'immutable';
import TasksActionTypes from '../data/TasksActionTypes';
import { ActionCreators } from '../data/TaskActions';

const ApiFetch = path => fetch(`http://localhost:3000/${path}`)
    .then(response => ({ response }))
    .catch(error => ({ error }));

export function* fetchTasks() {
    const tasks = yield call(ApiFetch, 'tasks');
    if (tasks.error) {
        yield put(ActionCreators.fetchError(tasks.error));
    } else {
        const json = yield call([tasks.response, 'json']);
        yield put(ActionCreators.fetchComplete(Immutable.List(json)));
    }
}

export default function* watchLastFetchTasks() {
    yield throttle(2000, TasksActionTypes.TASK_FETCH_START, fetchTasks);
}
