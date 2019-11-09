import * as types from './types';

export const login = credentials => ({
  type: types.LOGIN_REQUEST,
  payload: credentials
});

export const loginSuccess = user => ({
  type: types.LOGIN_SUCCESS,
  payload: user
});

export const loginFailure = error => ({
  type: types.LOGIN_FAILURE,
  payload: error
});

export const getUser = id => ({
  type: types.GET_USER_REQUEST,
  payload: id
});

export const getUserSuccess = user => ({
  type: types.GET_USER_SUCCESS,
  payload: user
});

export const getUserFailure = error => ({
  type: types.GET_USER_FAILURE,
  payload: error
});
