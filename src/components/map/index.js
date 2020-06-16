import React, { useState } from 'react';
import { LayerManager, Layer } from 'layer-manager/dist/components';
import { PluginMapboxGl } from 'layer-manager';
import omit from 'lodash/omit';
import isEmpty from 'lodash/isEmpty';
import { Icons } from 'vizzuality-components';

import { getParams } from '../../utils';
import Map from './components/map-component';
import MapLegend from './components/map-legend';
import DEFAULT_LAYERS from './layers';
import './styles.scss';

function MapWrapper() {
  const [layers, setLayers] = useState(DEFAULT_LAYERS);
  // const layers = DEFAULT_LAYERS;
  // const [layersJson, setLayersJson] = useState(JSON.stringify(DEFAULT_LAYERS, null, 2));
  const [layersSettings, setLayersSettings] = useState({});
  const [layersInteractiveIds, setLayersInteractiveIds] = useState([]);

  /* const onChangeJson = (json) => {
    setLayersJson(json);

    try {
      const newLayers = JSON.parse(json);
      setLayers(newLayers);
    } catch (e) {
      // do nothing
    }
  }; */

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

  const showLegend = false;

  return (
    <div className='c-map-wrapper'>
      <Icons />
      <Map
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        // mapStyle='mapbox://styles/layer-manager/ck07vfinn01xm1co324q5vcdl'
        minZoom={2}
        mapOptions={{
          fadeDuration: 0,
        }}
        interactiveLayerIds={layersInteractiveIds}
      >
        {(map) => (
          <LayerManager
            map={map}
            plugin={PluginMapboxGl}
            providers={{
              'carto-sql-points': (layerModel, layer, resolve, reject) => {
                const { source } = layerModel;
                const { provider } = source;

                fetch('get', provider.url, provider.options, layerModel)
                  .then((response) => {
                    return resolve({
                      ...layer,
                      source: {
                        ...omit(layer.source, 'provider'),
                        data: {
                          type: 'FeatureCollection',
                          features: response.rows.map((r) => ({
                            type: 'Feature',
                            properties: r,
                            geometry: {
                              type: 'Point',
                              coordinates: [r.lon, r.lat],
                            },
                          })),
                        },
                      },
                    });
                  })
                  .catch((e) => {
                    reject(e);
                  });
              },
            }}
          >
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
                  key={layer.id}
                  {...l}
                  onAfterAdd={onAfterAdd}
                  onAfterRemove={onAfterRemove}
                />
              );
            })}
          </LayerManager>
        )}
      </Map>

      {showLegend && (
        <MapLegend
          layers={layers}
          layersSettings={layersSettings}
          setLayersSettings={setLayersSettings}
        />
      )}
    </div>
  );
}

export default MapWrapper;
