import { createAction, createThunkAction } from 'store/redux';

import { fetchStates } from 'services/states';

export const setStates = createAction('setStates');
export const setStatesLoading = createAction('setStatesLoading');
export const setStatesLoaded = createAction('setStatesLoaded');
export const setStatesError = createAction('setStatesError');

export const getStates = createThunkAction(
  'getStates',
  (cancelToken) => (dispatch) => {
    dispatch(setStatesLoaded(false));
    const loading = setTimeout(() => {
      dispatch(setStatesLoading(true));
    }, 250);

    return fetchStates(null, { cancelToken })
      .then((data) => {
        clearTimeout(loading);
        dispatch(setStates(data));
        dispatch(setStatesLoading(false));
        dispatch(setStatesLoaded(true));
      })
      .catch((error) => {
        if (error && error.message === 'Abort') return;
        clearTimeout(loading);
        dispatch(setStatesError(true));
        dispatch(setStatesLoaded(true));
      });
  }
);
