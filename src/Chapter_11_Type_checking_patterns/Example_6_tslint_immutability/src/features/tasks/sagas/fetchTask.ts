import { call, put, takeLatest } from 'redux-saga/effects';
import TasksActionTypes from '../actions/TasksActionTypes';
import { ActionCreators } from '../actions/TaskActions';
import apiFetch from '../../../common/utils/apiFetch';
import { FetchTaskStartActionType } from '../actions/types';

export function* fetchTask(action: FetchTaskStartActionType) {
    const task = yield call(apiFetch, `tasks/${action.payload.taskId}`);
    if (task.error) {
        yield put(ActionCreators.fetchTaskError(task.error));
    } else {
        const json = yield call([task.response, 'json']);
        yield put(ActionCreators.fetchTaskComplete(json));
    }
}

export default takeLatest(TasksActionTypes.TASK_FETCH_START, fetchTask);
