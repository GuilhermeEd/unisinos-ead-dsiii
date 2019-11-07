import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

// Reducers
import authReducer from './auth/reducer';
import projectsReducer from './projects/reducer';

// Sagas
import authSaga from './auth/saga';
import projectsSaga from './projects/saga';

// Configure Reducers
export const rootReducer = combineReducers({
  auth: authReducer,
  projects: projectsReducer
});

// Configure Sagas
export function* rootSaga() {
  yield all([authSaga(), projectsSaga()]);
}
