import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

// Reducers
import authReducer from './auth/reducer';
import projectsReducer from './projects/reducer';
import donationsReducer from './donations/reducer';
import usersReducer from './users/reducer';

// Sagas
import authSaga from './auth/saga';
import projectsSaga from './projects/saga';
import donationsSaga from './donations/saga';
import usersSaga from './users/saga';

// Configure Reducers
export const rootReducer = combineReducers({
  auth: authReducer,
  projects: projectsReducer,
  donations: donationsReducer,
  users: usersReducer
});

// Configure Sagas
export function* rootSaga() {
  yield all([authSaga(), projectsSaga(), donationsSaga(), usersSaga()]);
}
