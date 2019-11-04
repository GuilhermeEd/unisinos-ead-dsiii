import { all, call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';

import * as types from './types';
import * as actions from './actions';
import * as services from './services';

export function* fetchCharacters({ payload: credentials }) {
  try {
    const user = yield call(services.login, credentials);
    yield put(actions.loginSuccess(user));
  } catch (error) {
    message.error(error.message);
    yield put(actions.loginFailure(error));
  }
}

// Watchers
export function* watchLogin() {
  yield takeLatest(types.LOGIN_REQUEST, fetchCharacters);
}

export default function*() {
  yield all([watchLogin()]);
}
