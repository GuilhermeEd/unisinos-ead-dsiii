import { all, call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';

import * as types from './types';
import * as actions from './actions';
import * as services from './services';

export function* login({ payload: credentials }) {
  try {
    const user = yield call(services.login, credentials);
    yield put(actions.loginSuccess(user));
  } catch (error) {
    message.error(error.message);
    yield put(actions.loginFailure(error));
  }
}

export function* getUser({ payload: id }) {
  try {
    const user = yield call(services.getUser, id);
    yield put(actions.getUserSuccess(user));
  } catch (error) {
    message.error(error.message);
    yield put(actions.getUserFailure(error));
  }
}

// Watchers
export function* watchLogin() {
  yield takeLatest(types.LOGIN_REQUEST, login);
}

export function* watchGetUser() {
  yield takeLatest(types.GET_USER_REQUEST, getUser);
}

export default function*() {
  yield all([watchLogin(), watchGetUser()]);
}
