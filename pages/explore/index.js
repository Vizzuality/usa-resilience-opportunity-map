import React from 'react';
import Main from 'components/main';
import ExploreMap from 'components/explore-map';

import GeometriesProvider from 'providers/geometries';

export default function Explore() {
  return (
    <Main>
      <GeometriesProvider />

      <div className="c-explore">
        <ExploreMap />
      </div>
    </Main>
  );
}
