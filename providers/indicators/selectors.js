import uniqBy from 'lodash.uniqby';
import flatten from 'lodash.flatten';

import { createSelector, createStructuredSelector } from 'reselect';

import { CATEGORIES } from './constants';

export const loading = (state) => state?.indicators?.loading;
export const loaded = (state) => state?.indicators?.loaded;
export const error = (state) => state?.indicators?.error;
export const data = (state) => state?.indicators?.data || [];
export const category = (state) => state?.indicators?.category;
export const active = (state) => state?.indicators?.active || [];
export const activeCategories = (state) =>
  state?.indicators?.activeCategories || [];

export const geometryId = (state) => state?.geometries?.id;
export const geometriesData = (state) => state?.geometries?.data;

export const categories = createSelector([data, loading], (_data, _loading) => {
  if (!_data.length || _loading) return [];

  return uniqBy(
    _data.map((d) => ({
      id: d.category.id,
      name: d.category.name,
    })),
    'id'
  );
});

export const indicators = createSelector(
  [data, loading, category],
  (_data, _loading, _category) => {
    if (!_data.length || _loading) return [];

    return _data.filter((d) => d.category.id === _category);
  }
);

export const stateLayer = createSelector(
  [geometryId, geometriesData],
  (_id, _data) => {
    if (!_data.length) return [];
    const geo = _data.find((g) => g.id === _id);

    if (!geo) return [];

    return [
      {
        id: 'state',
        name: 'State selected',
        config: {
          type: 'vector',
          render: {
            layers: [
              {
                filter: [
                  'all',
                  ['==', 'location_type', 2],
                  ['==', 'id', +geo.parentId || +geo.id],
                ],
                'source-layer': 'layer0',
                type: 'line',
                paint: {
                  'line-color': '#000',
                  'line-opacity': 1,
                  'line-width': 2,
                },
              },
              {
                filter: [
                  'all',
                  ['==', 'location_type', 2],
                  ['==', 'id', +geo.parentId || +geo.id],
                ],
                'source-layer': 'layer0',
                type: 'fill',
                paint: {
                  'fill-color': '#000',
                  'fill-opacity': 0,
                },
              },
            ],
          },
          source: {
            tiles: [
              'https://api.us-resilience-map.vizzuality.com/api/v1/geometries/tiles/{z}/{x}/{y}',
            ],
            type: 'vector',
          },
        },
      },
    ];
  }
);

export const countyLayer = createSelector(
  [data, active, geometryId, geometriesData],
  (_data, _active, _geometryId, _geometriesData) => {
    const inds = _active.map((i) => _data.find((d) => d.id === i));
    const geo = _geometriesData.find((g) => g.id === _geometryId);

    if (_active.length === 1) {
      const ind = inds[0];
      const colors = CATEGORIES[ind.category.id].ramp;

      return [
        {
          id: 'counties',
          name: 'Testing',
          config: {
            type: 'vector',
            render: {
              layers: [
                {
                  filter: [
                    'all',
                    ['==', 'location_type', 1],
                    ['==', 'parent_id', +geo.id],
                  ],
                  'source-layer': 'layer0',
                  type: 'fill',
                  paint: {
                    'fill-color': [
                      'match',
                      ['get', `${ind.slug}_hazard`],
                      ...flatten(
                        colors.map((c) => {
                          return [c.value, c.color];
                        })
                      ),
                      '#DDD',
                    ],
                    'fill-opacity': 1,
                  },
                },
                {
                  filter: [
                    'all',
                    ['==', 'location_type', 1],
                    ['==', 'parent_id', +geo.id],
                  ],
                  'source-layer': 'layer0',
                  type: 'line',
                  paint: {
                    'line-color': '#000',
                    'line-opacity': 1,
                    'line-dasharray': [2, 1],
                  },
                },
              ],
            },
            source: {
              tiles: [
                'https://api.us-resilience-map.vizzuality.com/api/v1/geometries/tiles/{z}/{x}/{y}',
              ],
              type: 'vector',
            },
          },
          legendConfig: {
            type: 'basic',
            items: colors.map((c) => ({
              name: c.value,
              color: c.color,
            })),
          },
        },
      ];
    }

    return [];
  }
);

export const layers = createSelector(
  [stateLayer, countyLayer],
  (_stateLayer, _countyLayer) => {
    return [..._stateLayer, ..._countyLayer];
  }
);

export const selectIndicatorsProps = createStructuredSelector({
  data,
  loading,
  loaded,
  error,
  category,
  active,
  indicators,
  categories,
  layers,
  activeCategories,
});
