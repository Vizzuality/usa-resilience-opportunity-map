import React from 'react';
import { connect } from 'react-redux';

import { MediaContextProvider, Media } from 'components/media';
import Main from 'components/main';
import ExploreMap from 'components/explore/map';
import ExploreSidebar from 'components/explore/sidebar';
import Icon from 'components/icon';
import LAPTOP_SVG from 'public/assets/images/laptop_picto01.svg?sprite';

import GeometriesProvider from 'providers/geometries';
import IndicatorsProvider from 'providers/indicators';

import { initializeStore } from 'store';
import { setGeometryId } from 'providers/geometries/actions';
import { selectGeometriesProps } from 'providers/geometries/selectors';

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
      id: id || null,
    },
  };
}

function ExploreEmbed() {
  return (
    <Main>
      <GeometriesProvider />
      <IndicatorsProvider />

      <MediaContextProvider>
        <Media lessThan="small">
          <div className="c-explore -mobile">
            <div className="wrapper">
              <Icon icon={LAPTOP_SVG} className="laptop-icon" />
              <h2>
                You&apos;ll need a bigger screen to explore and analyze any
                given county or state.
              </h2>
            </div>
          </div>
        </Media>
        <Media greaterThanOrEqual="small">
          <div className="c-explore">
            <div className="map-wrapper">
              <ExploreSidebar />
              <ExploreMap className="--embed" />
            </div>
          </div>
        </Media>
      </MediaContextProvider>
    </Main>
  );
}

export default connect(selectGeometriesProps, null)(ExploreEmbed);
