import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Main from 'layouts/main';
import Button from 'components/button';
import Autocomplete from 'components/autocomplete';
import { MediaContextProvider, Media } from 'components/media';

import GeometriesProvider from 'providers/geometries';
import { selectGeometriesProps } from 'providers/geometries/selectors';

function HomeWrapper({ children }) {
  HomeWrapper.propTypes = {
    children: PropTypes.array,
  };

  return (
    <MediaContextProvider>
      <Media lessThan="small">
        <Main>
          <div className="c-home --mobile">{children}</div>
        </Main>
      </Media>
      <Media greaterThanOrEqual="small">
        <Main>
          <div className="c-home">{children}</div>
        </Main>
      </Media>
    </MediaContextProvider>
  );
}

function Home({ locations }) {
  const [supported, useSupport] = useState(false);

  useEffect(() => {
    const ua = window?.navigator.userAgent;
    const msie = ua.indexOf('MSIE ');

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv:11\./)) {
      // eslint-disable-next-line no-console
      console.log('Your browser is not supported');
    } else {
      useSupport(true);
    }
  }, []);

  return supported ? (
    <HomeWrapper>
      <div className="home-greeting">
        <div className="home-greeting--wrapper">
          <MediaContextProvider>
            <Media greaterThanOrEqual="small">
              <h2>Welcome to</h2>
            </Media>
          </MediaContextProvider>
          <h1>USA Resilience Map</h1>
          <div className="break-line" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <MediaContextProvider>
            <Media greaterThanOrEqual="small">
              <Button
                className="home-cta"
                link="/explore"
                aria-label="explore data"
              >
                Explore the map
              </Button>
            </Media>
          </MediaContextProvider>
        </div>
        <div className="home-greeting--gradient" />
      </div>
      <div className="home-explore">
        <MediaContextProvider>
          <Media lessThan="small">
            <Main>
              <img
                className="map-icon"
                src="assets/images/laptop_picto02.svg"
                alt="map-icon"
              />
              <h2>
                Explore and analyze any given county or state from your desktop.
              </h2>
            </Main>
          </Media>
          <Media greaterThanOrEqual="small">
            <img
              className="home-brush-stroke"
              src="assets/images/home_brush_stroke.png"
              alt="map-icon"
            />
            <img
              className="map-icon"
              src="assets/images/home-map.svg"
              alt="map-icon"
            />
            <h2>
              Explore the map, and select which state or county would you like
              to analyze?
            </h2>
            <div className="home-search">
              <Autocomplete
                className="home-search--select"
                clearable
                options={locations}
              />
              <Button
                className="search-btn"
                link="/explore"
                aria-label="search all states"
              >
                Search all states
              </Button>
            </div>
          </Media>
        </MediaContextProvider>
      </div>
      <GeometriesProvider />
    </HomeWrapper>
  ) : (
    <div className="c-404">
      <h1>Your browser is not supported.</h1>
    </div>
  );
}

Home.propTypes = {
  locations: PropTypes.array,
};

export default connect(selectGeometriesProps, null)(Home);
