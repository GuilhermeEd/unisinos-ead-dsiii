import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { message } from 'antd';
import history from '../../routes/history';

import * as types from './types';
import * as actions from './actions';
import * as services from './services';

export function* createUser({ payload }) {
  try {
    yield call(services.createUser, payload);
    message.success('Usuário criado com sucesso!');
    history.replace('/');
    yield put(actions.createUserSuccess());
  } catch (error) {
    message.error(error.message);
    yield put(actions.createUserFailure(error));
  }
}

export function* fetchUsers({ payload }) {
  try {
    const { user } = yield select(store => store.auth);
    const query = { ...payload, user: user.codigo };
    const users = yield call(services.fetchUsers, query);
    yield put(actions.fetchUsersSuccess(users));
  } catch (error) {
    message.error(error.message);
    yield put(actions.fetchUsersFailure(error));
  }
}

export function* updateUser({ payload: query }) {
  try {
    const { user } = yield select(store => store.auth);
    const payload = { ...query, user: user.codigo };
    yield call(services.updateUser, payload);
    yield put(actions.updateUserSuccess());
    message.success('Usuário atualizado com sucesso!');
    yield put(actions.fetchUsers());
  } catch (error) {
    message.error(error.message);
    yield put(actions.updateUserFailure(error));
  }
}

export function* fetchUser({ payload: id }) {
  try {
    const query = { codigo_usuario: id };
    const users = yield call(services.fetchUser, query);
    yield put(actions.fetchUserSuccess(users));
  } catch (error) {
    message.error(error.message);
    yield put(actions.fetchUserFailure(error));
  }
}

// Watchers
export function* watchCreateUser() {
  yield takeLatest(types.CREATE_USER_REQUEST, createUser);
}

export function* watchFetchUsers() {
  yield takeLatest(types.FETCH_USERS_REQUEST, fetchUsers);
}

export function* watchUpdateUser() {
  yield takeLatest(types.UPDATE_USER_REQUEST, updateUser);
}

export function* watchFetchUser() {
  yield takeLatest(types.FETCH_USER_REQUEST, fetchUser);
}

export default function*() {
  yield all([watchCreateUser(), watchFetchUsers(), watchUpdateUser(), watchFetchUser()]);
}
