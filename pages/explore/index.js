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
    },
  };
}

function Explore({ data }) {
  // TODO: move to selectors
  const states = data
    .filter((d) => d.locationType === 'state')
    .reduce(
      (obj, d) => ({
        ...obj,
        [d.id]: d.name,
      }),
      {}
    );
  const locations = data.map((d) => ({
    value: d.id,
    id: d.id,
    parentId: d.parentId,
    label:
      d.locationType === 'county'
        ? `${d.name} (${states[d.parentId]})`
        : d.name,
  }));

  const buildInputProps = (getInputProps) => {
    return getInputProps({
      placeholder: 'Enter a state, county name or ZIP code',
    });
  };
  return (
    <Main>
      <GeometriesProvider />
      <IndicatorsProvider />

      <div className="c-explore">
        <div className="explore-search wrapper">
          <Autocomplete
            className="explore-search--select"
            options={locations}
            buildInputProps={buildInputProps}
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
  data: PropTypes.array,
};

export default connect(selectGeometriesProps, null)(Explore);
