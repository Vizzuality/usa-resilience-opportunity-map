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
  [actions.setIndicatorsCategory]: (state, { payload }) => ({
    ...state,
    category: payload,
  }),
  [actions.setIndicatorsActive]: (state, { payload }) => ({
    ...state,
    active: payload,
  }),
  [actions.toggleIndicatorsActive]: (state, { payload }) => {
    const active = [...state.active];

    return {
      ...state,
      active:
        active.indexOf(payload) > -1
          ? active.filter((e) => e !== payload)
          : [payload, ...active],
    };
  },
};
