import { call, put, takeLatest } from 'redux-saga/es/effects';
import Immutable from 'immutable';
import TasksActionTypes from '../actions/TasksActionTypes';
import { ActionCreators } from '../actions/TaskActions';
import apiFetch from '../../../utils/apiFetch';

export function* fetchTasks() {
    const tasks = yield call(apiFetch, 'tasks');
    if (tasks.error) {
        yield put(ActionCreators.fetchTasksError(tasks.error));
    } else {
        const json = yield call([tasks.response, 'json']);
        yield put(ActionCreators.fetchTasksComplete(Immutable.List(json)));
    }
}

export default takeLatest(TasksActionTypes.TASKS_FETCH_START, fetchTasks);
