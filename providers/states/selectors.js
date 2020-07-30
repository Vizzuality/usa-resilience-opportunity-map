import { createSelector, createStructuredSelector } from 'reselect';

export const loading = (state) => state?.states?.loading;
export const loaded = (state) => state?.states?.loaded;
export const error = (state) => state?.states?.error;
export const data = (state) => state?.states?.data || [];

export const options = createSelector([data, loading], (_data, _loading) => {
  if (!_data.length || _loading) return [];

  return _data.map((d) => ({
    label: d.name,
    value: d.code,
  }));
});

export const selectStatesProps = createStructuredSelector({
  data,
  loading,
  loaded,
  error,
  options,
});
