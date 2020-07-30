import * as actions from './actions';

export default {
  [actions.setStates]: (state, { payload }) => ({
    ...state,
    data: payload,
  }),
  [actions.setStatesLoading]: (state, { payload }) => ({
    ...state,
    loading: payload,
    error: false,
  }),
  [actions.setStatesLoaded]: (state, { payload }) => ({
    ...state,
    loaded: payload,
  }),
  [actions.setStatesError]: (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload,
  }),
};
