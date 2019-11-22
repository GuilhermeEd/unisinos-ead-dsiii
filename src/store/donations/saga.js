import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { message } from 'antd';

import * as types from './types';
import * as actions from './actions';
import * as services from './services';

export function* createDonation({ payload: query }) {
  try {
    const { user } = yield select(store => store.auth);
    const payload = { ...query, user: user.codigo };
    yield call(services.createDonation, payload);
    message.success('Doação efetuada com sucesso!');
    yield put(actions.createDonationSuccess());
    yield put(actions.fetchProjects());
  } catch (error) {
    message.error(error.message);
    yield put(actions.createDonationFailure(error));
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
export function* watchCreateDonation() {
  yield takeLatest(types.CREATE_DONATION_REQUEST, createDonation);
}

export function* watchFetchProjects() {
  yield takeLatest(types.FETCH_PROJECTS_REQUEST, fetchProjects);
}

export default function*() {
  yield all([watchCreateDonation(), watchFetchProjects()]);
}
