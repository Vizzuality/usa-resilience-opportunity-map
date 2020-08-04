import React from 'react';
import Main from 'components/main';
import ExploreMap from 'components/explore/map';
import ExploreSidebar from 'components/explore/sidebar';

import GeometriesProvider from 'providers/geometries';
import IndicatorsProvider from 'providers/indicators';

import { initializeStore } from 'store';
import { setGeometryId } from 'providers/geometries/actions';

export async function getServerSideProps(ctx) {
  const rStore = initializeStore();
  const { dispatch } = rStore;

  const id = ctx?.query?.id;

  if (id) {
    dispatch(setGeometryId(id));
  }

  return {
    props: {
      initialReduxState: rStore.getState(),
    },
  };
}

export default function Explore() {
  return (
    <Main>
      <GeometriesProvider />
      <IndicatorsProvider />

      <div className="c-explore">
        <ExploreSidebar />
        <ExploreMap />
      </div>
    </Main>
  );
}