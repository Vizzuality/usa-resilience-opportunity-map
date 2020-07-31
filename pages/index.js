import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Fuse from 'fuse.js';

import Main from 'components/main';
import Button from 'components/button';
import Dropdown from 'components/dropdown';

import GeometriesProvider from 'providers/geometries';
import { selectGeometriesProps } from 'providers/geometries/selectors';

function Home({ data }) {
  const [inputValue, setInput] = useState('');
  const [
    menuOpen,
    // openMenu
  ] = useState(false);

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
    label:
      d.locationType === 'county'
        ? `${d.name} (${states[d.parentId]})`
        : d.name,
  }));
  const fuse = new Fuse(locations, {
    keys: ['label'],
  });
  const options = fuse.search(inputValue).map((o) => o.item);

  const buildInputProps = (getInputProps) => {
    return getInputProps({
      placeholder: 'Enter a state, county name or ZIP code',
      onClick: (val) => console.log(val),
      readOnly: !menuOpen,
      onKeyDown: (e) => console.log(e),
    });
  };

  console.log(inputValue);

  return (
    <Main>
      <div className="c-home">
        <div className="home-greeting">
          <div className="home-greeting--wrapper">
            <h2>Welcome to</h2>
            <h1>USA Resilience Map</h1>
            <div className="break-line" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button
              className="home-cta"
              colors={{ border: '#4595e1', text: '#fff' }}
              link="/explore"
            >
              Explore data
            </Button>
          </div>
          <div className="home-greeting--gradient" />
        </div>
        <div className="home-explore">
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
            Explore the map, and select which state or county would you like to
            analyze?
          </h2>
          <div className="home-search">
            <Dropdown
              className="home-search--select"
              options={options} // locations
              onChange={(sel) => console.log(sel) || setInput(sel.label)}
              defaultText={{ selected: inputValue }}
              placeholder="Enter a state, county name or ZIP code"
              searchable
              buildInputProps={buildInputProps}
            />
            <Button
              className="search-btn"
              colors={{ border: '#fff', text: '#fff' }}
            >
              Search all states
            </Button>
          </div>
        </div>
      </div>
      <GeometriesProvider />
    </Main>
  );
}

Home.propTypes = {
  data: PropTypes.array,
};

export default connect(selectGeometriesProps, null)(Home);
