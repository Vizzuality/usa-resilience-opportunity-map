import Select from 'react-select';

import Main from 'components/main';
import Button from 'components/button';

const options = [
  { value: 'OR', label: 'Oregon' },
  { value: 'CA', label: 'California' },
  { value: 'NV', label: 'Nevada' },
];

export default function Home() {
  return (
    <Main>
      <div className="c-home">
        <div className="home-greeting">
          <h2>Welcome to</h2>
          <h1>USA Resilience Map</h1>
          <div className="break-line" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button
            className="home-cta"
            colors={{ border: '#4595e1', text: '#FFF' }}
            link="/explore"
          >
            Explore data
          </Button>
        </div>
        <div className="home-explore">
          <img className="map-icon" src="assets/home-map.svg" alt="map-icon" />
          <h2>
            Explore the map, and select which state or county would you like to
            analyze?
          </h2>
          <div className="home-search">
            <Select
              className="home-search--select"
              options={options}
              placeholder="Enter a state, county name or ZIP code"
              styles={{
                control: (provided) => ({ ...provided, height: '55px' }),
                menu: (provided) => ({
                  ...provided,
                  color: '#000',
                  textAlign: 'left',
                }),
              }}
            />
            <Button
              className="search-btn"
              colors={{ border: '#FFF', text: '#FFF' }}
            >
              Search all states
            </Button>
          </div>
        </div>
      </div>
    </Main>
  );
}
