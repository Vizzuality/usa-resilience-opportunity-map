import * as actions from './actions';

export default {
  [actions.setGeometries]: (state, { payload }) => ({
    ...state,
    data: payload,
  }),
  [actions.setGeometryValues]: (state, { payload }) => ({
    ...state,
    geometryValues: payload,
  }),
  [actions.setGeometriesLoading]: (state, { payload }) => ({
    ...state,
    loading: payload,
    error: false,
  }),
  [actions.setGeometriesLoaded]: (state, { payload }) => ({
    ...state,
    loaded: payload,
  }),
  [actions.setGeometriesError]: (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload,
  }),
  [actions.setGeometryId]: (state, { payload }) => ({
    ...state,
    id: payload,
  }),
};
