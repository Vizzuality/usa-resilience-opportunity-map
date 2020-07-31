import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { connect } from 'react-redux';
import sortBy from 'lodash.sortby';

import Main from 'components/main';
import Button from 'components/button';

import GeometriesProvider from 'providers/geometries';
import { selectGeometriesProps } from 'providers/geometries/selectors';

function Home({ data }) {
  const states = data
    .filter((d) => d.locationType === 'state')
    .reduce(
      (obj, d) => ({
        ...obj,
        [d.id]: d.name,
      }),
      {}
    );
  const options = sortBy(
    data.map((d) => ({
      value: d.id,
      label:
        d.locationType === 'county'
          ? `${d.name} (${states[d.parentId]})`
          : d.name,
    })),
    'label'
  );

  const [inputValue, setInput] = useState('');
  const [menuOpen, openMenu] = useState(false);

  const onInputChange = (payload, { action }) => {
    switch (action) {
      case 'input-change':
        setInput(payload);
        openMenu(payload && payload !== '');
        return;
      case 'menu-close':
        openMenu(inputValue && inputValue !== '');
        break;
      default:
    }
  };

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
            <Select
              className="home-search--select"
              options={options}
              placeholder="Enter a state, county name or ZIP code"
              inputValue={inputValue}
              onInputChange={onInputChange}
              menuIsOpen={menuOpen}
              styles={{
                control: (provided) => ({
                  ...provided,
                  height: '55px',
                  cursor: 'text',
                }),
                menu: (provided) => ({
                  ...provided,
                  color: '#000',
                  textAlign: 'left',
                }),
                menuList: (provided) => ({
                  ...provided,
                  cursor: 'pointer',
                  maxHeight: '240px',
                }),
                indicatorsContainer: () => ({
                  display: 'none',
                }),
              }}
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
