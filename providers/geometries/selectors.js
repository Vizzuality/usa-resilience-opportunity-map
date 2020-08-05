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

export const states = createSelector([data], (_data) => {
  if (!_data.length) return [];
  return _data
    .filter((d) => d.locationType === 'state')
    .reduce(
      (obj, d) => ({
        ...obj,
        [d.id]: d.name,
      }),
      {}
    );
});

export const locations = createSelector([data, states], (_data, _states) => {
  if (!_data.length) return [];
  return _data.map((d) => ({
    value: d.id,
    id: d.id,
    parentId: d.parentId,
    label:
      d.locationType === 'county'
        ? `${d.name} (${_states[d.parentId]})`
        : d.name,
  }));
});

export const selectGeometriesProps = createStructuredSelector({
  data,
  loading,
  loaded,
  error,
  options,
  locations,
  states,
});
