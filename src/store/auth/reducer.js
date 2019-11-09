import createReducer from '../createReducer';
import * as types from './types';

const initialState = {
  user: null,
  loading: false,
  error: null
};

export default createReducer(initialState, {
  [types.LOGIN_REQUEST]: (state, action) => ({
    ...state,
    loading: true,
    error: initialState.error
  }),
  [types.LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    user: action.payload,
    loading: false,
    error: initialState.error
  }),
  [types.LOGIN_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload
  }),
  [types.GET_USER_REQUEST]: (state, action) => ({
    ...state,
    loading: true,
    error: initialState.error
  }),
  [types.GET_USER_SUCCESS]: (state, action) => ({
    ...state,
    user: action.payload,
    loading: false,
    error: initialState.error
  }),
  [types.GET_USER_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload
  })
});
