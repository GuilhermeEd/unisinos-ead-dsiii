import * as types from './types';

export const login = credentials => ({
  type: types.LOGIN_REQUEST,
  payload: credentials,
});

export const loginSuccess = user => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = error => ({
  type: types.LOGIN_FAILURE,
  payload: error,
});
