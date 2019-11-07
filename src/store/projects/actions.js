import * as types from './types';

export const createProject = payload => ({
  type: types.CREATE_PROJECT_REQUEST,
  payload
});

export const createProjectSuccess = () => ({
  type: types.CREATE_PROJECT_SUCCESS
});

export const createProjectFailure = error => ({
  type: types.CREATE_PROJECT_FAILURE,
  payload: error
});
