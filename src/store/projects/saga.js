import { all, call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';

import * as types from './types';
import * as actions from './actions';
import * as services from './services';

export function* createProject({ payload }) {
  try {
    yield call(services.createProject, payload);
    yield put(actions.createProjectSuccess());
  } catch (error) {
    message.error(error.message);
    yield put(actions.createProjectFailure(error));
  }
}

// Watchers
export function* watchCreateProject() {
  yield takeLatest(types.CREATE_PROJECT_REQUEST, createProject);
}

export default function*() {
  yield all([watchCreateProject()]);
}
