import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ExploreMap from 'components/explore/map';
import ExploreSidebar from 'components/explore/sidebar';
import Autocomplete from 'components/autocomplete';
import Button from 'components/button';
import InfoTooltip from 'components/explore/info-tooltip';

const DIGITAL_OCEAN_URL =
  'https://us-resilience-space.nyc3.digitaloceanspaces.com';

export default function Explore({
  locations,
  activeLocationId,
  embed,
  setGeometryId,
  setGeometryValues,
}) {
  Explore.propTypes = {
    locations: PropTypes.array,
    activeLocationId: PropTypes.string,
    embed: PropTypes.bool,
    setGeometryId: PropTypes.func,
    setGeometryValues: PropTypes.func,
  };
  const [activeState, setActiveState] = useState('');

  const formatUnderscore = (string) => string?.replace(/ /g, '_').toLowerCase();

  const locationSearched = locations.find((l) => l.id === activeLocationId);

  useEffect(() => {
    if (!locationSearched?.parentId) {
      const parsedLocation = formatUnderscore(locationSearched?.label);
      setActiveState(parsedLocation);
    } else {
      setActiveState('');
    }
  }, [activeLocationId]);

  return (
    <div className="c-explore">
      {!embed && (
        <div className="explore-search wrapper">
          <Autocomplete
            className="explore-search--select"
            options={locations}
            activeOption={
              activeLocationId
                ? locations.find((l) => l.id === activeLocationId)
                : null
            }
          />
          <div data-tip data-for="download-data">
            <Button
              className="download-btn"
              data-tip
              data-for="download-data"
              disabled={activeLocationId && !activeState}
            >
              {!activeLocationId && !activeState && (
                <a
                  href={`${DIGITAL_OCEAN_URL}/states/all.csv`}
                  rel="noreferrer"
                  target="_blank"
                >
                  Download data
                </a>
              )}
              {activeLocationId && activeState && (
                <a
                  href={`${DIGITAL_OCEAN_URL}/states/${activeState}.csv`}
                  rel="noreferrer"
                  target="_blank"
                >
                  Download data
                </a>
              )}
              {activeLocationId && !activeState && 'Download data'}
            </Button>
          </div>
          <InfoTooltip
            className="download-data-tooltip"
            id="download-data"
            place="bottom"
            disabled={activeState}
            description="Select a state to download its data"
          />
          <Button
            className="search-btn"
            onClick={() => {
              setGeometryId(null);
              setGeometryValues([]);
            }}
          >
            All states view
          </Button>
          {locationSearched?.parentId && (
            <Button
              className="search-btn"
              onClick={() => {
                if (locationSearched?.parentId) {
                  setGeometryId(locationSearched?.parentId);
                  setGeometryValues([]);
                }
              }}
            >
              State view
            </Button>
          )}
        </div>
      )}
      <div className="map-wrapper">
        <ExploreSidebar />
        <ExploreMap />
      </div>
    </div>
  );
}
