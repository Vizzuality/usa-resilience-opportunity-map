import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { MediaContextProvider, Media } from 'components/media';
import Main from 'components/main';
import Loader from 'components/loader';
import Icon from 'components/icon';
import LAPTOP_SVG from 'public/assets/images/laptop_picto01.svg?sprite';

import GeometriesProvider from 'providers/geometries';
import IndicatorsProvider from 'providers/indicators';

import { initializeStore } from 'store';
import { setGeometryId } from 'providers/geometries/actions';
import { selectGeometriesProps } from 'providers/geometries/selectors';
import {
  toggleIndicatorsActive,
  // toggleCategoriesActive,
  // setIndicatorsCategory,
} from 'providers/indicators/actions';
// import { selectIndicatorsProps } from 'providers/indicators/selectors';

export async function getServerSideProps(ctx) {
  const rStore = initializeStore();
  const { dispatch } = rStore;

  const { id, indicator } = ctx?.query;

  if (indicator) {
    const [id1, id2] = indicator.split(',');
    // const ind1 = data.find((i) => i.id === id1);
    // const ind1 = data.find((i) => i.id === id2);

    dispatch(toggleIndicatorsActive(id1));
    // dispatch(toggleCategoriesActive(ind1?.category?.id));
    if (id2) {
      // dispatch(toggleIndicatorsActive(id2));
      // dispatch(toggleCategoriesActive(ind2?.category?.id));
      // dispatch(toggleCategoriesActive(ind.category.id));
    } else {
      // dispatch(setIndicatorsCategory(ind.category.id));
    }
  }

  if (id) {
    dispatch(setGeometryId(id));
  }

  return {
    props: {
      initialReduxState: rStore.getState(),
      id: id || null,
      indicator: indicator.split(',') || null,
    },
  };
}

function ExplorePage({ locations, id, loaded, loading }) {
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
              <Explore locations={locations} activeLocationId={id} />
            </Suspense>
          )}
        </Media>
      </MediaContextProvider>
    </Main>
  );
}

ExplorePage.propTypes = {
  locations: PropTypes.array,
  id: PropTypes.string,
  loaded: PropTypes.bool,
  loading: PropTypes.bool,
};

export default connect(selectGeometriesProps, null)(ExplorePage);
