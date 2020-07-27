import React from "react";

import { LayerManager, Layer } from 'layer-manager/dist/components';
import { PluginMapboxGl } from 'layer-manager';

import activeLayers from './activeLayers'
import Map from './map';
import Legend from './legend';


export default function ExploreMap() {
  const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN || "";

  return (
    <div className="c-explore-map" style={{ height: "calc(100vh - 54px)" }}>
      <Map
        width="100%"
        height="100%"
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        {(map) => (
          <LayerManager map={map} plugin={PluginMapboxGl}>
            {activeLayers.map(l => (
              <Layer key={l.id} {...l} />
            ))}
          </LayerManager>
        )}
      </Map>
      <Legend />
    </div>
  );
}