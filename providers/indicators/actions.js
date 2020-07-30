import { createAction, createThunkAction } from 'store/redux';

import { fetchIndicators } from 'services/indicators';

export const setIndicators = createAction('setIndicators');
export const setIndicatorsLoading = createAction('setIndicatorsLoading');
export const setIndicatorsLoaded = createAction('setIndicatorsLoaded');
export const setIndicatorsError = createAction('setIndicatorsError');
export const setIndicatorsCategory = createAction('setIndicatorsCategory');
export const setIndicatorsActive = createAction('setIndicatorsActive');
export const toggleIndicatorsActive = createAction('toggleIndicatorsActive');

export const getIndicators = createThunkAction(
  'getIndicators',
  (cancelToken) => (dispatch) => {
    dispatch(setIndicatorsLoaded(false));
    const loading = setTimeout(() => {
      dispatch(setIndicatorsLoading(true));
    }, 250);

    return fetchIndicators(null, { cancelToken })
      .then((data) => {
        clearTimeout(loading);
        dispatch(setIndicators(data));
        dispatch(setIndicatorsLoading(false));
        dispatch(setIndicatorsLoaded(true));
      })
      .catch((error) => {
        if (error && error.message === 'Abort') return;
        clearTimeout(loading);
        dispatch(setIndicatorsError(true));
        dispatch(setIndicatorsLoaded(true));
      });
  }
);
