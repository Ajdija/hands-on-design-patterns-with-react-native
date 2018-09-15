import { call, put, takeLatest } from 'redux-saga/es/effects';
import TasksActionTypes from '../actions/TasksActionTypes';
import { ActionCreators } from '../actions/TaskActions';
import apiFetch from '../../../common/utils/apiFetch';

export function* fetchTask(action) {
    const task = yield call(apiFetch, `tasks/${action.payload.taskId}`);
    if (task.error) {
        yield put(ActionCreators.fetchTaskError(task.error));
    } else {
        const json = yield call([task.response, 'json']);
        yield put(ActionCreators.fetchTaskComplete(json));
    }
}

export default takeLatest(TasksActionTypes.TASK_FETCH_START, fetchTask);
