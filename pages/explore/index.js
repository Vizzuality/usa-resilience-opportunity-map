import React from 'react';
import Main from 'components/main';
import ExploreMap from 'components/explore-map';

import GeometriesProvider from 'providers/geometries';
import IndicatorsProvider from 'providers/indicators';

export default function Explore() {
  return (
    <Main>
      <GeometriesProvider />
      <IndicatorsProvider />

      <div className="c-explore">
        <ExploreMap />
      </div>
    </Main>
  );
}
