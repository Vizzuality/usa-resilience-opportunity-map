import { createAction, createThunkAction } from 'store/redux';

import { fetchGeometries } from 'services/Geometries';

export const setGeometries = createAction('setGeometries');
export const setGeometriesLoading = createAction('setGeometriesLoading');
export const setGeometriesLoaded = createAction('setGeometriesLoaded');
export const setGeometriesError = createAction('setGeometriesError');

export const getGeometries = createThunkAction(
  'getGeometries',
  (cancelToken) => (dispatch) => {
    dispatch(setGeometriesLoaded(false));
    const loading = setTimeout(() => {
      dispatch(setGeometriesLoading(true));
    }, 250);

    return fetchGeometries(null, { cancelToken })
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
