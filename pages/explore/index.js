import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import qs from 'query-string';

import Explore from 'components/explore';
import { MediaContextProvider, Media } from 'components/media';
import Main from 'layouts/main';
import Url from 'components/url';
import Loader from 'components/loader';
import Icon from 'components/icon';
import LAPTOP_SVG from 'public/assets/images/laptop_picto01.svg?sprite';

import { initializeStore } from 'store';
import GeometriesProvider from 'providers/geometries';
import IndicatorsProvider from 'providers/indicators';
import { setGeometryId } from 'providers/geometries/actions';
import { selectGeometriesProps } from 'providers/geometries/selectors';
import { selectExploreUrlParams } from 'providers/indicators/selectors';
import { setIndicatorsActive } from 'providers/indicators/actions';

export async function getServerSideProps(ctx) {
  const rStore = initializeStore();
  const { dispatch } = rStore;

  const options = { arrayFormat: 'comma' };
  const { id, indicator } = qs.parse(
    Object.keys(ctx?.query)
      .map((q) => `${q}=${ctx?.query[q]}`)
      .join('&'),
    options
  );

  if (id) {
    dispatch(setGeometryId(id));
  }

  if (indicator) {
    dispatch(
      setIndicatorsActive(Array.isArray(indicator) ? indicator : [indicator])
    );
  }

  return {
    props: {
      initialReduxState: rStore.getState(),
    },
  };
}

function ExplorePage({
  locations,
  id,
  loaded,
  loading,
  urlParams,
  queryFunction,
}) {
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
            <Explore locations={locations} activeLocationId={id} />
          )}
        </Media>
      </MediaContextProvider>
      <Url queryParams={urlParams} queryFunction={queryFunction} />
    </Main>
  );
}

ExplorePage.propTypes = {
  locations: PropTypes.array,
  id: PropTypes.string,
  loaded: PropTypes.bool,
  loading: PropTypes.bool,
  urlParams: PropTypes.shape({}),
  queryFunction: PropTypes.func,
};

export default connect(
  (state) => ({
    ...selectGeometriesProps(state),
    urlParams: selectExploreUrlParams(state),
  }),
  (dispatch) => ({
    queryFunction: (param) => {
      if (param.key === 'id') {
        dispatch(setGeometryId(param.value || null));
      }

      if (param.key === 'indicator') {
        if (!param.value) {
          dispatch(setIndicatorsActive([]));
        } else {
          const { indicator } = qs.parse(`${param.key}=${param.value}`, {
            arrayFormat: 'comma',
          });
          dispatch(
            setIndicatorsActive(
              Array.isArray(indicator) ? indicator : [indicator]
            )
          );
        }
      }
    },
  })
)(ExplorePage);
