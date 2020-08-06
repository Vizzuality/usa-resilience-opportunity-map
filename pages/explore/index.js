import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Main from 'components/main';
import ExploreMap from 'components/explore/map';
import ExploreSidebar from 'components/explore/sidebar';
import Autocomplete from 'components/autocomplete';
import Button from 'components/button';

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
    </Main>
  );
}

Explore.propTypes = {
  locations: PropTypes.array,
  id: PropTypes.string,
};

export default connect(selectGeometriesProps, null)(Explore);
