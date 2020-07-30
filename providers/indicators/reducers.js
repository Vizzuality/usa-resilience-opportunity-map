import * as actions from './actions';

export default {
  [actions.setIndicators]: (state, { payload }) => ({
    ...state,
    data: payload,
  }),
  [actions.setIndicatorsLoading]: (state, { payload }) => ({
    ...state,
    loading: payload,
    error: false,
  }),
  [actions.setIndicatorsLoaded]: (state, { payload }) => ({
    ...state,
    loaded: payload,
  }),
  [actions.setIndicatorsError]: (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload,
  }),
};
