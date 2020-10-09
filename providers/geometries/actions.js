import { createAction, createThunkAction } from 'store/redux';

import { fetchGeometries, fetchGeometryValues } from 'services/geometries';

export const setGeometries = createAction('setGeometries');
export const setGeometryValues = createAction('setGeometryValues');
export const setGeometryChildren = createAction('setGeometryChildren');
export const setGeometriesLoading = createAction('setGeometriesLoading');
export const setGeometriesLoaded = createAction('setGeometriesLoaded');
export const setGeometriesError = createAction('setGeometriesError');
export const setGeometryId = createAction('setGeometryId');

export const getGeometries = createThunkAction(
  'getGeometries',
  (cancelToken) => (dispatch) => {
    dispatch(setGeometriesLoaded(false));
    const loading = setTimeout(() => {
      dispatch(setGeometriesLoading(true));
    }, 250);

    fetchGeometries(null, { cancelToken })
      .then((data) => {
        clearTimeout(loading);
        dispatch(setGeometries(data));
        dispatch(setGeometriesLoading(false));
        dispatch(setGeometriesLoaded(true));
      })
      .catch((error) => {
        if (error && error.message === 'Abort') return;
        clearTimeout(loading);
        dispatch(setGeometriesError(true));
        dispatch(setGeometriesLoaded(true));
      });
  }
);

export const getGeometryValues = createThunkAction(
  'getGeometryValues',
  (params) => (dispatch) => {
    const { cancelToken, id } = params;
    fetchGeometryValues({ id }, { cancelToken })
      .then((data) => {
        dispatch(setGeometryValues(data?.indicatorData));
        dispatch(setGeometryChildren(data?.children));
      })
      .catch((error) => {
        if (error && error.message === 'Abort') return;
        dispatch(setGeometriesError(true));
      });
  }
);
