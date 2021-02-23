import { createSelector, createStructuredSelector } from 'reselect';
import groupBy from 'lodash.groupby';

export const loading = (state) => state?.geometries?.loading;
export const loaded = (state) => state?.geometries?.loaded;
export const error = (state) => state?.geometries?.error;
export const data = (state) => state?.geometries?.data || [];
export const geometryValues = (state) =>
  state?.geometries?.geometryValues || [];
export const censusGeometries = (state) =>
  state?.geometries?.censusGeometries || [];
export const geometryChildren = (state) =>
  state?.geometries?.geometryChildren || [];
export const id = (state) => state?.geometries?.id;

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
        ? `${d.name}, ${_states[d.parentId]}`
        : d.name,
  }));
});

export const currentLocation = createSelector(
  [locations, id],
  (_locations, _id) => {
    if (!_locations.length) return null;
    return _locations.find((l) => l.id === _id);
  }
);

export const childrenDistribution = createSelector(
  [geometryChildren],
  (children) => {
    const indicatorValues = children.reduce(
      (acc, n) => [...acc, ...n.indicatorData],
      []
    );
    const groupedByIndicator = groupBy(indicatorValues, 'indicatorId');
    return Object.keys(groupedByIndicator).reduce((acc, key) => {
      acc[key] = groupBy(groupedByIndicator[key], 'hazardValue');
      return acc;
    }, {});
  }
);

export const bbox = createSelector([data, id], (_data, _id) => {
  if (_data.length && _id) {
    const geo = _data.find((d) => +d.id === +_id);

    if (!geo) return null;

    return {
      bbox: geo.bbox,
      options: {
        padding: { top: 50, bottom: 50, left: 800, right: 50 },
      },
    };
  }

  return {
    bbox: [-124.763068, 24.523096, -66.949895, 49.384358],
    options: {
      padding: { top: 50, bottom: 50, left: 800, right: 50 },
    },
  };
});

export const selectGeometriesProps = createStructuredSelector({
  id,
  data,
  geometryValues,
  censusGeometries,
  loading,
  loaded,
  error,
  options,
  locations,
  currentLocation,
  states,
  bbox,
});
