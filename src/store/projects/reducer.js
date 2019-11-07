import createReducer from '../createReducer';
import * as types from './types';

const initialState = {
  loading: false,
  error: null
};

export default createReducer(initialState, {
  [types.CREATE_PROJECT_REQUEST]: (state, action) => ({
    ...state,
    loading: true,
    error: initialState.error
  }),
  [types.CREATE_PROJECT_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    error: initialState.error
  }),
  [types.CREATE_PROJECT_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload
  })
});
