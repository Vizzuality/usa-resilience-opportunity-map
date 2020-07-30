import { createSelector, createStructuredSelector } from 'reselect';

export const loading = (state) => state?.geometries?.loading;
export const loaded = (state) => state?.geometries?.loaded;
export const error = (state) => state?.geometries?.error;
export const data = (state) => state?.geometries?.data || [];

export const options = createSelector([data, loading], (_data, _loading) => {
  if (!_data.length || _loading) return [];

  return _data.map((d) => ({
    label: d.name,
    value: d.id,
  }));
});

export const selectGeometriesProps = createStructuredSelector({
  data,
  loading,
  loaded,
  error,
  options,
});
