import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { message } from 'antd';

import * as types from './types';
import * as actions from './actions';
import * as services from './services';

export function* createProject({ payload: query }) {
  try {
    const { user } = yield select(store => store.auth);
    const payload = { ...query, user: user.codigo };
    yield call(services.createProject, payload);
    message.success('Projeto criado com sucesso!');
    yield put(actions.createProjectSuccess());
    yield put(actions.fetchProjects());
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

export function* deleteProject({ payload }) {
  try {
    yield call(services.deleteProject, payload);
    yield put(actions.deleteProjectSuccess());
    message.success('Projeto deletado com sucesso!');
    yield put(actions.fetchProjects());
  } catch (error) {
    message.error(error.message);
    yield put(actions.deleteProjectFailure(error));
  }
}

export function* updateProject({ payload: query }) {
  try {
    const { user } = yield select(store => store.auth);
    const payload = { ...query, user: user.codigo };
    yield call(services.updateProject, payload);
    yield put(actions.updateProjectSuccess());
    message.success('Projeto atualizado com sucesso!');
    yield put(actions.fetchProjects());
  } catch (error) {
    message.error(error.message);
    yield put(actions.deleteProjectFailure(error));
  }
}

export function* fetchProject({ payload: id }) {
  try {
    const { user } = yield select(store => store.auth);
    const query = { codigo_projeto: id, codigo_usuario: user.codigo };
    const projects = yield call(services.fetchProject, query);
    yield put(actions.fetchProjectSuccess(projects));
  } catch (error) {
    message.error(error.message);
    yield put(actions.fetchProjectFailure(error));
  }
}

// Watchers
export function* watchCreateProject() {
  yield takeLatest(types.CREATE_PROJECT_REQUEST, createProject);
}

export function* watchFetchProjects() {
  yield takeLatest(types.FETCH_PROJECTS_REQUEST, fetchProjects);
}

export function* watchDeleteProject() {
  yield takeLatest(types.DELETE_PROJECT_REQUEST, deleteProject);
}

export function* watchUpdateProject() {
  yield takeLatest(types.UPDATE_PROJECT_REQUEST, updateProject);
}

export function* watchFetchProject() {
  yield takeLatest(types.FETCH_PROJECT_REQUEST, fetchProject);
}

export default function*() {
  yield all([
    watchCreateProject(),
    watchFetchProjects(),
    watchDeleteProject(),
    watchUpdateProject(),
    watchFetchProject()
  ]);
}
