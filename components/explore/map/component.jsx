import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
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
import Map from 'components/map';
import MapControls from 'components/map/controls';
import ZoomControl from 'components/map/controls/zoom';
import LegendItemTypeBivariate from 'components/bivariate-legend';
import MapTooltip from 'components/explore/tooltip';

export default function ExploreMap({
  indicators,
  geometries,
  className,
  setGeometryId,
}) {
  const { layers } = indicators;
  const { bbox } = geometries;
  const [layersSettings, setLayersSettings] = useState({});
  const [layersInteractiveIds, setLayersInteractiveIds] = useState([]);
  const [layersHover, setLayersHover] = useState({});
  const [viewport, setViewport] = useState({
    longitude: 0,
    latitude: 0,
    zoom: 2,
    maxZoom: 12,
    minZoom: 2,
    bearing: 0,
    pitch: 0,
  });

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

  const onChangeOrder = (ids) => {
    console.log('onChangeOrder', ids);
  };

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

  const resize = () => {
    setViewport({
      ...viewport,
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();

    return function cleanup() {
      window.removeEventListener('resize', resize);
    };
    // eslint-disable-next-line
  }, []);

  const onViewportChange = (vp) => {
    setViewport(vp);
  };

  const onZoomChange = (zoom) => {
    setViewport({
      ...viewport,
      zoom,
      transitionDuration: 250,
    });
  };

  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

  return (
    <div className={cx('c-explore-map', className)}>
      <Icons />
      <Map
        width="100%"
        height="100%"
        bounds={bbox}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        viewport={viewport}
        onViewportChange={onViewportChange}
        onClick={(e) => {
          if (e && e.features) {
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
                interactions.counties
                  ? interactions.counties.id?.toString()
                  : interactions.state.id?.toString()
              );
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
            <MapTooltip layersHover={layersHover} />
          </>
        )}
      </Map>

      <MapControls>
        <ZoomControl viewport={viewport} onZoomChange={onZoomChange} />
      </MapControls>

      <div className="c-legend">
        <Legend
          maxHeight="65vh"
          collapsable={false}
          sortable={false}
          onChangeOrder={onChangeOrder}
        >
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
