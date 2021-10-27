import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ExploreMap from 'components/explore/map';
import ExploreSidebar from 'components/explore/sidebar';
import Autocomplete from 'components/autocomplete';
import Button from 'components/button';

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
  const [isState, setIsState] = useState(false);

  useEffect(() => {
    const locationSearched = locations.find((l) => l.id === activeLocationId);
    if (!locationSearched?.parentId) {
      setIsState(true);
    } else {
      setIsState(false);
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
          <Button
            className="download-btn"
            disabled={!activeLocationId || !isState}
            onClick={() => {
              // setGeometryId(null);
              // setGeometryValues([]);
            }}
          >
            Download data
          </Button>
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
