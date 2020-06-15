import React, { useState, useRef } from 'react';
import { LayerManager, Layer } from 'layer-manager/dist/components';
import { PluginMapboxGl } from 'layer-manager';
import ReactMapGL from 'react-map-gl';

import activeLayers from './layers';

function Map() {
  const [loaded, setLoaded] = useState(false);
  const mapRef = useRef();

  return (
    <ReactMapGL
      ref={mapRef}
      width="100%"
      height="100%"
      onLoad={() => setLoaded(true)}
      mapboxApiAccessToken={''}
    >
      {loaded && mapRef.current && (
        <LayerManager map={mapRef.current.getMap()} plugin={PluginMapboxGl}>
          {activeLayers && activeLayers.map(l => (
            <Layer key={l.id} {...l} />
          ))}
        </LayerManager>
      )}
    </ReactMapGL>
  );
}

export default Map;
