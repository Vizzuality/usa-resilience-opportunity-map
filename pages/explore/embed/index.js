import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { MediaContextProvider, Media } from 'components/media';
import Main from 'layouts/main';
import Loader from 'components/loader';
import Icon from 'components/icon';
import LAPTOP_SVG from 'public/assets/images/laptop_picto01.svg?sprite';

import GeometriesProvider from 'providers/geometries';
import IndicatorsProvider from 'providers/indicators';

import { selectGeometriesProps } from 'providers/geometries/selectors';

export { getServerSideProps } from '..';

function ExploreEmbed({ locations, id, loaded, loading }) {
  const Explore = lazy(() => import('components/explore'));
  return (
    <Main>
      <GeometriesProvider />
      <IndicatorsProvider />

      <MediaContextProvider>
        <Media lessThan="small">
          <div className="c-explore --mobile">
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
          {loading && !loaded && <Loader />}
          {loaded && !loading && (
            <Suspense fallback={<Loader />}>
              <Explore locations={locations} activeLocationId={id} embed />
            </Suspense>
          )}
        </Media>
      </MediaContextProvider>
    </Main>
  );
}

ExploreEmbed.propTypes = {
  locations: PropTypes.array,
  id: PropTypes.string,
  loaded: PropTypes.bool,
  loading: PropTypes.bool,
};

export default connect(selectGeometriesProps, null)(ExploreEmbed);
