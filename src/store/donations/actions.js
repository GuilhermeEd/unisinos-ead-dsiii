import * as types from './types';

export const createDonation = payload => ({
  type: types.CREATE_DONATION_REQUEST,
  payload
});

export const createDonationSuccess = () => ({
  type: types.CREATE_DONATION_SUCCESS
});

export const createDonationFailure = error => ({
  type: types.CREATE_DONATION_FAILURE,
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
