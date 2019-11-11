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

export const fetchProjects = query => ({
  type: types.FETCH_PROJECTS_REQUEST,
  payload: query
});

export const fetchProjectsSuccess = projects => ({
  type: types.FETCH_PROJECTS_SUCCESS,
  payload: projects
});

export const fetchProjectsFailure = error => ({
  type: types.FETCH_PROJECTS_FAILURE,
  payload: error
});

export const deleteProject = id => ({
  type: types.DELETE_PROJECT_REQUEST,
  payload: id
});

export const deleteProjectSuccess = () => ({
  type: types.DELETE_PROJECT_SUCCESS
});

export const deleteProjectFailure = error => ({
  type: types.DELETE_PROJECT_FAILURE,
  payload: error
});

export const updateProject = payload => ({
  type: types.UPDATE_PROJECT_REQUEST,
  payload
});

export const updateProjectSuccess = () => ({
  type: types.UPDATE_PROJECT_SUCCESS
});

export const updateProjectFailure = error => ({
  type: types.UPDATE_PROJECT_FAILURE,
  payload: error
});

export const fetchProject = query => ({
  type: types.FETCH_PROJECT_REQUEST,
  payload: query
});

export const fetchProjectSuccess = project => ({
  type: types.FETCH_PROJECT_SUCCESS,
  payload: project
});

export const fetchProjectFailure = error => ({
  type: types.FETCH_PROJECT_FAILURE,
  payload: error
});
