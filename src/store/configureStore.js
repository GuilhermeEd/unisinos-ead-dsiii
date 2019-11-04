import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

// Reducers
import authReducer from './auth/reducer';

// Sagas
import authSaga from './auth/saga';

// Configure Reducers
export const rootReducer = combineReducers({
  auth: authReducer
});

// Configure Sagas
export function* rootSaga() {
  yield all([authSaga()]);
}
