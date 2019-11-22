import createReducer from '../createReducer';
import * as types from './types';

const initialState = {
  users: [],
  user: null,
  userCreated: false,
  userUpdated: false,
  loading: false,
  error: null
};

export default createReducer(initialState, {
  [types.CREATE_USER_REQUEST]: (state, action) => ({
    ...state,
    userCreated: initialState.userCreated,
    loading: true,
    error: initialState.error
  }),
  [types.CREATE_USER_SUCCESS]: (state, action) => ({
    ...state,
    userCreated: true,
    loading: false,
    error: initialState.error
  }),
  [types.CREATE_USER_FAILURE]: (state, action) => ({
    ...state,
    userCreated: false,
    loading: false,
    error: action.payload
  }),
  [types.FETCH_USERS_REQUEST]: (state, action) => ({
    ...state,
    loading: true,
    error: initialState.error
  }),
  [types.FETCH_USERS_SUCCESS]: (state, action) => ({
    ...state,
    users: action.payload,
    loading: false,
    error: initialState.error
  }),
  [types.FETCH_USERS_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload
  }),
  [types.UPDATE_USER_REQUEST]: (state, action) => ({
    ...state,
    userUpdated: initialState.userUpdated,
    loading: true,
    error: initialState.error
  }),
  [types.UPDATE_USER_SUCCESS]: (state, action) => ({
    ...state,
    userUpdated: true,
    loading: false,
    error: initialState.error
  }),
  [types.UPDATE_USER_FAILURE]: (state, action) => ({
    ...state,
    userUpdated: false,
    loading: false,
    error: action.payload
  }),
  [types.FETCH_USER_REQUEST]: (state, action) => ({
    ...state,
    loading: true,
    error: initialState.error
  }),
  [types.FETCH_USER_SUCCESS]: (state, action) => ({
    ...state,
    user: action.payload,
    loading: false,
    error: initialState.error
  }),
  [types.FETCH_USER_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload
  })
});
