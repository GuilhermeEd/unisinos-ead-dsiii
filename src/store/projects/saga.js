import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { message } from 'antd';

import * as types from './types';
import * as actions from './actions';
import * as services from './services';

export function* createProject({ payload }) {
  try {
    yield call(services.createProject, payload);
    message.success('Projeto criado com sucesso!');
    yield put(actions.createProjectSuccess());
  } catch (error) {
    message.error(error.message);
    yield put(actions.createProjectFailure(error));
  }
}

export function* fetchProjects({ payload }) {
  try {
    const { user } = yield select(store => store.auth);
    const query = { ...payload, user: user.codigo };
    const projects = yield call(services.fetchProjects, query);
    yield put(actions.fetchProjectsSuccess(projects));
  } catch (error) {
    message.error(error.message);
    yield put(actions.fetchProjectsFailure(error));
  }
}

// Watchers
export function* watchCreateProject() {
  yield takeLatest(types.CREATE_PROJECT_REQUEST, createProject);
}

export function* watchFetchProjects() {
  yield takeLatest(types.FETCH_PROJECTS_REQUEST, fetchProjects);
}

export default function*() {
  yield all([watchCreateProject(), watchFetchProjects()]);
}
