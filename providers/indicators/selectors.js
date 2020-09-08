import uniqBy from 'lodash.uniqby';
import flatten from 'lodash.flatten';
import startCase from 'lodash.startcase';
import sortBy from 'lodash.sortby';

import { createSelector, createStructuredSelector } from 'reselect';

import { CATEGORIES } from './constants';

export const loading = (state) => state?.indicators?.loading;
export const loaded = (state) => state?.indicators?.loaded;
export const error = (state) => state?.indicators?.error;
export const data = (state) => state?.indicators?.data || [];
export const category = (state) => state?.indicators?.category;
export const active = (state) => state?.indicators?.active || [];

// Geometries selectors
const geometryId = (state) => state?.geometries?.id;
const geometriesData = (state) => state?.geometries?.data;
const geometryValues = (state) => state?.geometries?.geometryValues;

export const activeCategories = createSelector(
  [data, loading, active],
  (_data, _loading, _active) => {
    if (!_data.length || _loading) return [];

    return _active.map(
      (id) => _data.find((ind) => ind.id === id)?.category?.id
    );
  }
);

export const categories = createSelector([data, loading], (_data, _loading) => {
  // All categories
  if (!_data.length || _loading) return [];

  return uniqBy(
    _data.map((d) => ({
      id: d.category.id,
      name: d.category.name,
    })),
    'id'
  );
});

export const mostRelevantIndicators = createSelector(
  [data, categories, geometryValues],
  (_data, _categories, _values) => {
    const valuesPerIndicator = _values
      .map((val) => ({ ...val, rel: val.indicator.id }))
      .reduce((acc, val) => ({ ...acc, [val.rel]: val }), {});

    const indicatorsPerCategory = _categories.map((c) =>
      _data.filter((d) => d.category.id === c.id)
    );
    const relevantIndicators = indicatorsPerCategory
      .map((c) => {
        const indicatorsWithValue = c
          .filter((ind) => !!valuesPerIndicator[ind.id]) // removing indicators with no data
          .map((ind) => ({
            ...ind,
            sortValue: valuesPerIndicator[ind.id]?.normalizedValue,
          }));
        const sorted = sortBy(indicatorsWithValue, 'sortValue');
        return sorted.slice(0, 2); // top 2 indicators per category
      })
      .flat();

    return relevantIndicators;
  }
);

export const indicators = createSelector(
  [data, loading, category, mostRelevantIndicators],
  (_data, _loading, _category, _relevant) => {
    // All the indicators in the selected category
    if (!_data.length || _loading) return [];

    if (_category === '9999') return _relevant;
    return _data.filter((d) => d.category.id === _category);
  }
);

export const stateLayer = createSelector(
  [geometryId, geometriesData],
  (_id, _data) => {
    if (!_data || !_data.length) return [];
    const geo = _data.find((g) => g.id === _id);

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
                  ['==', 'location_type', 2], // states
                  ...(geo ? [['!=', 'id', +geo.parentId || +geo.id]] : []),
                ],
                'source-layer': 'layer0',
                type: 'line',
                paint: {
                  'line-color': [
                    'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    '#000',
                    'transparent',
                  ],
                  'line-opacity': 1,
                  'line-width': [
                    'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    2,
                    1,
                  ],
                },
              },

              {
                filter: ['all', ['==', 'location_type', 2]],
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
        interactionConfig: {
          enable: true,
        },
      },
    ];
  }
);

export const countyLayer = createSelector(
  [data, active, geometryId, geometriesData],
  (_data, _active, _geometryId, _geometriesData) => {
    if (!_data || !_data.length || !_geometriesData || !_geometriesData.length)
      return [];
    const _indicators = _active
      .map((i) => _data.find((d) => d.id === i))
      .sort((a, b) => (a.category.id > b.category.id ? 1 : -1));

    const geo = _geometriesData.find((g) => g.id === _geometryId);

    if (_active.length === 1) {
      const ind = _indicators[0];
      const colors = CATEGORIES[ind.category.id].ramp;
      const legends =
        geo && geo.parentId ? ind.legendCountries : ind.legendStates;
      // Sometimes the legend will include 'Data not available' as an option.
      const canHaveNoData = legends.some((l) => l.includes('Data'));
      const legendsWithColor = legends
        .filter((l) => !l.includes('Data'))
        .map((l, i) => ({
          name: l,
          color: colors[i],
        }));

      const legendItems = canHaveNoData
        ? [
            ...legendsWithColor,
            {
              name: 'Data not available',
              color: '#F1F1F1',
            },
          ]
        : legendsWithColor;

      return [
        {
          id: 'counties',
          name: startCase(ind?.name),
          config: {
            type: 'vector',
            render: {
              layers: [
                {
                  filter: [
                    'all',
                    ['==', 'location_type', 1],
                    ...(geo
                      ? [['==', 'parent_id', +geo.parentId || +geo.id]]
                      : []),
                  ],
                  'source-layer': 'layer0',
                  type: 'fill',
                  paint: {
                    'fill-color': [
                      'match',
                      ['get', `${ind.slug}_hazard`],
                      ...flatten(
                        colors.map((c, i) => {
                          return [i, c];
                        })
                      ),
                      '#F1F1F1', // no data
                    ],
                    'fill-opacity': 1,
                  },
                },

                {
                  filter: [
                    'all',
                    ['==', 'location_type', 1],
                    ...(geo
                      ? [['==', 'parent_id', +geo.parentId || +geo.id]]
                      : []),
                  ],
                  'source-layer': 'layer0',
                  type: 'line',
                  paint: {
                    'line-color': [
                      'case',
                      ['boolean', ['feature-state', 'hover'], false],
                      '#000',
                      '#999',
                    ],
                    'line-opacity': [
                      'case',
                      ['boolean', ['feature-state', 'hover'], false],
                      1,
                      0.5,
                    ],
                    'line-width': [
                      'case',
                      ['boolean', ['feature-state', 'hover'], false],
                      2,
                      1,
                    ],
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
          interactionConfig: {
            enable: true,
          },
          legendConfig: {
            type: 'basic',
            items: legendItems,
          },
        },
      ];
    }

    if (_active.length === 2) {
      const ind1 = _indicators[0];
      const ind2 = _indicators[1];

      const colors = CATEGORIES[`${ind1.category.id}${ind2.category.id}`].ramp;

      return [
        {
          id: 'counties',
          name: '',
          config: {
            type: 'vector',
            render: {
              layers: [
                {
                  filter: [
                    'all',
                    ['==', 'location_type', 1],
                    ...(geo
                      ? [['==', 'parent_id', +geo.parentId || +geo.id]]
                      : []),
                  ],
                  'source-layer': 'layer0',
                  type: 'fill',
                  paint: {
                    'fill-color': [
                      'match',
                      [
                        'concat',
                        ['get', `${ind1.slug}_hazard`],
                        ['get', `${ind2.slug}_hazard`],
                      ],
                      ...flatten(
                        colors.map((c, i) => {
                          return [`${Math.floor((i / 5) % 5)}${i % 5}`, c];
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
                    ...(geo
                      ? [['==', 'parent_id', +geo.parentId || +geo.id]]
                      : []),
                  ],
                  'source-layer': 'layer0',
                  type: 'line',
                  paint: {
                    'line-color': [
                      'case',
                      ['boolean', ['feature-state', 'hover'], false],
                      '#000',
                      '#999',
                    ],
                    'line-opacity': [
                      'case',
                      ['boolean', ['feature-state', 'hover'], false],
                      1,
                      0.5,
                    ],
                    'line-width': [
                      'case',
                      ['boolean', ['feature-state', 'hover'], false],
                      2,
                      1,
                    ],
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
          interactionConfig: {
            enable: true,
          },
          legendConfig: {
            type: 'bivariate',
            items: colors.map((c, i) => ({
              name: `${Math.floor((i / 5) % 5)}${i % 5}`,
              color: c,
            })),
            indicators: [ind1, ind2],
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
    return [..._countyLayer, ..._stateLayer];
  }
);

export const selectExploreUrlParams = createSelector(
  [geometryId, active, activeCategories],
  (_location, _indicators) => {
    return {
      id: _location,
      indicator: _indicators,
    };
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
