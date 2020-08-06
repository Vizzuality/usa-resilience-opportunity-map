import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { MediaContextProvider, Media } from 'components/media';
import Main from 'components/main';
import ExploreMap from 'components/explore/map';
import ExploreSidebar from 'components/explore/sidebar';
import Autocomplete from 'components/autocomplete';
import Button from 'components/button';
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

function Explore({ locations, id }) {
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
            <div className="explore-search wrapper">
              <Autocomplete
                className="explore-search--select"
                options={locations}
                activeOption={id ? locations.find((l) => l.id === id) : null}
              />
              <Button className="search-btn" link="/explore?id=0">
                All states view
              </Button>
            </div>
            <div className="map-wrapper">
              <ExploreSidebar />
              <ExploreMap />
            </div>
          </div>
        </Media>
      </MediaContextProvider>
    </Main>
  );
}

Explore.propTypes = {
  locations: PropTypes.array,
  id: PropTypes.string,
};

export default connect(selectGeometriesProps, null)(Explore);
