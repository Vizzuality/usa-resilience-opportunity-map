import { createSelector, createStructuredSelector } from 'reselect';

export const loading = (state) => state?.indicators?.loading;
export const loaded = (state) => state?.indicators?.loaded;
export const error = (state) => state?.indicators?.error;
export const data = (state) => state?.indicators?.data || [];

export const options = createSelector([data, loading], (_data, _loading) => {
  if (!_data.length || _loading) return [];

  return _data.map((d) => ({
    label: d.name,
    value: d.id,
  }));
});

export const selectIndicatorsProps = createStructuredSelector({
  data,
  loading,
  loaded,
  error,
  options,
});
