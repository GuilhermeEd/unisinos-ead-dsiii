import createReducer from '../createReducer';
import * as types from './types';

const initialState = {
  projects: [],
  projectCreated: false,
  loading: false,
  error: null
};

export default createReducer(initialState, {
  [types.CREATE_PROJECT_REQUEST]: (state, action) => ({
    ...state,
    projectCreated: initialState.projectCreated,
    loading: true,
    error: initialState.error
  }),
  [types.CREATE_PROJECT_SUCCESS]: (state, action) => ({
    ...state,
    projectCreated: true,
    loading: false,
    error: initialState.error
  }),
  [types.CREATE_PROJECT_FAILURE]: (state, action) => ({
    ...state,
    projectCreated: false,
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
