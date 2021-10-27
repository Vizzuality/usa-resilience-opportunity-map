import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ExploreMap from 'components/explore/map';
import ExploreSidebar from 'components/explore/sidebar';
import Autocomplete from 'components/autocomplete';
import Button from 'components/button';
import InfoTooltip from 'components/explore/info-tooltip';

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

  useEffect(() => {
    const locationSearched = locations.find((l) => l.id === activeLocationId);
    if (!locationSearched?.parentId) {
      const parsedLocation = locationSearched.label
        .replace(/ /g, '_')
        .toLowerCase();
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
              disabled={!activeLocationId || !activeState}
              data-tip
              data-for="download-data"
              onClick={() => {
                // setGeometryId(null);
                // setGeometryValues([]);
              }}
            >
              Download data
            </Button>
          </div>
          <InfoTooltip
            className="download-data-tooltip"
            id="download-data"
            place="bottom"
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
        </div>
      )}
      <div className="map-wrapper">
        <ExploreSidebar />
        <ExploreMap />
      </div>
    </div>
  );
}
