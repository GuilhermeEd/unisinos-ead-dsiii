import createReducer from '../createReducer';
import * as types from './types';

const initialState = {
  projects: [],
  donationCreated: false,
  loading: false,
  error: null
};

export default createReducer(initialState, {
  [types.CREATE_DONATION_REQUEST]: (state, action) => ({
    ...state,
    donationCreated: initialState.donationCreated,
    loading: true,
    error: initialState.error
  }),
  [types.CREATE_DONATION_SUCCESS]: (state, action) => ({
    ...state,
    donationCreated: true,
    loading: false,
    error: initialState.error
  }),
  [types.CREATE_DONATION_FAILURE]: (state, action) => ({
    ...state,
    donationCreated: false,
    loading: false,
    error: action.payload
  }),
  [types.FETCH_PROJECTS_REQUEST]: (state, action) => ({
    ...state,
    loading: true,
    error: initialState.error
  }),
  [types.FETCH_PROJECTS_SUCCESS]: (state, action) => ({
    ...state,
    projects: action.payload,
    loading: false,
    error: initialState.error
  }),
  [types.FETCH_PROJECTS_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload
  })
});
