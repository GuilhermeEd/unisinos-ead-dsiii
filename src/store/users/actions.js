import * as types from './types';

export const createUser = payload => ({
  type: types.CREATE_USER_REQUEST,
  payload
});

export const createUserSuccess = () => ({
  type: types.CREATE_USER_SUCCESS
});

export const createUserFailure = error => ({
  type: types.CREATE_USER_FAILURE,
  payload: error
});

export const fetchUsers = query => ({
  type: types.FETCH_USERS_REQUEST,
  payload: query
});

export const fetchUsersSuccess = users => ({
  type: types.FETCH_USERS_SUCCESS,
  payload: users
});

export const fetchUsersFailure = error => ({
  type: types.FETCH_USERS_FAILURE,
  payload: error
});

export const updateUser = payload => ({
  type: types.UPDATE_USER_REQUEST,
  payload
});

export const updateUserSuccess = () => ({
  type: types.UPDATE_USER_SUCCESS
});

export const updateUserFailure = error => ({
  type: types.UPDATE_USER_FAILURE,
  payload: error
});

export const fetchUser = query => ({
  type: types.FETCH_USER_REQUEST,
  payload: query
});

export const fetchUserSuccess = user => ({
  type: types.FETCH_USER_SUCCESS,
  payload: user
});

export const fetchUserFailure = error => ({
  type: types.FETCH_USER_FAILURE,
  payload: error
});
