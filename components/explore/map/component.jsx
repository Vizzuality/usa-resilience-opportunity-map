import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/router';

import PropTypes from 'prop-types';
import cx from 'classnames';
import { useDebouncedCallback } from 'use-debounce';

// Utils
import isEmpty from 'lodash.isempty';
import { getParams } from 'utils/timeline';

// Map tools
import { LayerManager, Layer } from 'layer-manager/dist/components';
import { PluginMapboxGl } from 'layer-manager';

// Legend
import {
  Icons,
  Legend,
  LegendListItem,
  LegendItemTypes,
  LegendItemTypeBasic,
  LegendItemTimeStep,
} from 'vizzuality-components';

// Local imports
import Icon from 'components/icon';
import Map from 'components/map';
import MapControls from 'components/map/controls';
import ZoomControl from 'components/map/controls/zoom';
import LegendItemTypeBivariate from 'components/bivariate-legend';
import MapTooltip from 'components/explore/tooltip';
import InfoTooltip from 'components/explore/info-tooltip';

import { STORIES } from 'constants/stories';

import storiesVisibility from 'svgs/stories-visibility.svg?sprite';

export default function ExploreMap({
  indicators,
  geometries,
  className,
  setGeometryId,
}) {
  const { push } = useRouter();
  const { layers: indicatorLayers } = indicators;

  const { bbox } = geometries;
  const [layersSettings, setLayersSettings] = useState({});
  const [layersInteractiveIds, setLayersInteractiveIds] = useState([]);
  const [layersHover, setLayersHover] = useState({});
  const [visibilityStories, setVisibilityStories] = useState(true);

  const handleStoriesVisibility = () =>
    setVisibilityStories(!visibilityStories);

  const [viewport, setViewport] = useState({
    longitude: 0,
    latitude: 0,
    zoom: 2,
    maxZoom: 12,
    minZoom: 2,
    bearing: 0,
    pitch: 0,
  });

  const layers = useMemo(() => {
    return [
      ...indicatorLayers,
      {
        id: 'stories',
        name: 'Stories',
        config: {
          type: 'geojson',
          images: [
            {
              id: 'pin',
              src: '/assets/images/location-pin.png',
              options: {},
            },
          ],
          render: {
            layers: [
              {
                type: 'symbol',
                image: '/assets/images/location-pin.png',
                metadata: {
                  position: 'top',
                },
                // only works with symbol type layer
                layout: {
                  visibility: visibilityStories ? 'visible' : 'none',
                  'icon-ignore-placement': true,
                  'icon-allow-overlap': true,
                  'icon-image': 'pin',
                  'icon-size': 0.5,
                },
              },
            ],
          },
          source: {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: STORIES.map((s) => {
                return {
                  type: 'Feature',
                  properties: s,
                  geometry: {
                    type: 'Point',
                    coordinates: [s.location.long, s.location.lat],
                  },
                };
              }),
            },
          },
          interactionConfig: {
            enable: true,
          },
        },
      },
    ];
  }, [indicatorLayers, visibilityStories]);

  // LEGEND
  const layerGroups = layers
    .filter((l) => {
      return !!l.legendConfig;
    })
    .map((l) => {
      const { id, paramsConfig, sqlConfig, decodeConfig, timelineConfig } = l;
      const lSettings = layersSettings[id] || {};

      const params =
        !!paramsConfig && getParams(paramsConfig, lSettings.params);
      const sqlParams =
        !!sqlConfig && getParams(sqlConfig, lSettings.sqlParams);
      const decodeParams =
        !!decodeConfig &&
        getParams(decodeConfig, {
          ...timelineConfig,
          ...lSettings.decodeParams,
        });
      const timelineParams = !!timelineConfig && {
        ...timelineConfig,
        ...getParams(paramsConfig, lSettings.params),
        ...getParams(decodeConfig, lSettings.decodeParams),
      };

      return {
        id,
        slug: id,
        dataset: id,
        layers: [
          {
            active: true,
            ...l,
            ...lSettings,
            params,
            sqlParams,
            decodeParams,
            timelineParams,
          },
        ],
        ...lSettings,
      };
    });

  const onChangeVisibility = (l, visibility) => {
    setLayersSettings({
      ...layersSettings,
      [l.id]: {
        ...layersSettings[l.id],
        visibility,
      },
    });
  };

  const onChangeOpacity = (l, opacity) => {
    setLayersSettings({
      ...layersSettings,
      [l.id]: {
        ...layersSettings[l.id],
        opacity,
      },
    });
  };

  const onChangeLayerDate = (dates, layer) => {
    const { id, decodeConfig } = layer;

    setLayersSettings({
      ...layersSettings,
      [id]: {
        ...layersSettings[id],
        ...(decodeConfig && {
          decodeParams: {
            startDate: dates[0],
            endDate: dates[1],
            trimEndDate: dates[2],
          },
        }),
        ...(!decodeConfig && {
          params: {
            startDate: dates[0],
            endDate: dates[1],
          },
        }),
      },
    });
  };

  const onAfterAdd = (layerModel) => {
    if (!isEmpty(layerModel.interactionConfig)) {
      layerModel.mapLayer.layers.forEach((l) => {
        const { id } = l;

        if (!layersInteractiveIds.includes(id)) {
          setLayersInteractiveIds((prevLayersInteractiveIds) => [
            ...prevLayersInteractiveIds,
            id,
          ]);
        }
      });
    }
  };

  const onAfterRemove = (layerModel) => {
    if (!isEmpty(layerModel.interactionConfig)) {
      layerModel.mapLayer.layers.forEach((l) => {
        const { id } = l;

        if (layersInteractiveIds.includes(id)) {
          setLayersInteractiveIds((prevLayersInteractiveIds) => {
            const arr = prevLayersInteractiveIds.filter((e) => e !== id);

            return arr;
          });
        }
      });
    }
  };

  const onViewportChange = useDebouncedCallback((vp) => {
    setViewport(vp);
  }, []);

  const onZoomChange = (zoom) => {
    setViewport({
      ...viewport,
      zoom,
      transitionDuration: 250,
    });
  };

  return (
    <div className={cx('c-explore-map', className)}>
      <Icons />
      <Map
        width="100%"
        height="100%"
        bounds={bbox}
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        viewport={viewport}
        onViewportChange={onViewportChange}
        interactiveLayerIds={layersInteractiveIds}
        visibilityStories={visibilityStories}
        onClick={(e) => {
          if (e && e.features) {
            const story = e.features.find((f) => f.source === 'stories');
            if (story) {
              push(story.properties.href);
            }
            if (!story) {
              const interactions = e.features
                .filter((int) => ['state', 'counties'].includes(int.source))
                .reduce((acc, f) => {
                  return {
                    ...acc,
                    [f.source]: {
                      id: f.id,
                      data: f.properties,
                    },
                  };
                }, {});

              if (interactions.counties || interactions.state)
                setGeometryId(
                  interactions.state
                    ? interactions.state.id?.toString()
                    : interactions.counties.id?.toString()
                );
            }
          }
        }}
        onHover={(e) => {
          if (e && e.features) {
            const { lngLat, features } = e;

            const interactions = features.reduce((acc, f) => {
              return {
                ...acc,
                [f.source]: {
                  id: f.id,
                  data: f.properties,
                },
              };
            }, {});

            setLayersHover({
              lngLat,
              interactions,
            });
          }
        }}
        onMouseOut={() => {
          setLayersHover({
            lngLat: null,
            interactions: {},
          });
        }}
      >
        {(map) => (
          <>
            <LayerManager map={map} plugin={PluginMapboxGl}>
              {layers.map((layer) => {
                const {
                  id,
                  paramsConfig,
                  sqlConfig,
                  decodeConfig,
                  timelineConfig,
                  decodeFunction,
                } = layer;

                const lSettings = layersSettings[id] || {};

                const l = {
                  ...layer,
                  ...layer.config,
                  ...lSettings,
                  ...(!!paramsConfig && {
                    params: getParams(paramsConfig, { ...lSettings.params }),
                  }),

                  ...(!!sqlConfig && {
                    sqlParams: getParams(sqlConfig, { ...lSettings.sqlParams }),
                  }),

                  ...(!!decodeConfig && {
                    decodeParams: getParams(decodeConfig, {
                      ...timelineConfig,
                      ...lSettings.decodeParams,
                    }),
                    decodeFunction,
                  }),
                };
                return (
                  <Layer
                    key={l.id}
                    {...l}
                    onAfterAdd={onAfterAdd}
                    onAfterRemove={onAfterRemove}
                  />
                );
              })}
            </LayerManager>
            <MapTooltip
              layersHover={layersHover}
              visibilityStories={visibilityStories}
            />
          </>
        )}
      </Map>
      <MapControls>
        <ZoomControl viewport={viewport} onZoomChange={onZoomChange} />
        <button
          className="visibility-stories-button"
          data-tip
          data-for="visibilityStories"
          onClick={handleStoriesVisibility}
        >
          <Icon className="icon-visibility" icon={storiesVisibility} />
        </button>
        <InfoTooltip
          id="visibilityStories"
          place="left"
          description="Show/Hide stories on map"
        />
      </MapControls>

      <div className="c-legend">
        <Legend maxHeight="65vh" collapsable sortable={false}>
          {layerGroups.map((layerGroup, i) => {
            return (
              <LegendListItem
                index={i}
                key={layerGroup.slug}
                layerGroup={layerGroup}
                onChangeVisibility={onChangeVisibility}
                onChangeOpacity={onChangeOpacity}
              >
                <LegendItemTypes>
                  <LegendItemTypeBasic />
                  <LegendItemTypeBivariate />
                </LegendItemTypes>

                <LegendItemTimeStep
                  defaultStyles={{
                    handleStyle: {
                      backgroundColor: 'white',
                      borderRadius: '50%',
                      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.29)',
                      border: '0px',
                      zIndex: 2,
                    },
                    railStyle: { backgroundColor: '#d6d6d9' },
                    dotStyle: { visibility: 'hidden', border: '0px' },
                  }}
                  handleChange={onChangeLayerDate}
                />
              </LegendListItem>
            );
          })}
        </Legend>
      </div>
    </div>
  );
}

ExploreMap.propTypes = {
  indicators: PropTypes.shape({
    layers: PropTypes.array,
  }),
  geometries: PropTypes.shape({
    bbox: PropTypes.object,
  }),
  className: PropTypes.string,
  setGeometryId: PropTypes.func,
};
