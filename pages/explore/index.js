import React from 'react';
import Main from 'components/main';
import ExploreMap from 'components/explore-map';

export default function Explore() {
  return (
    <Main>
      <div className="c-explore">
        <ExploreMap />
      </div>
    </Main>
  );
}
