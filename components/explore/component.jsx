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

  const formatUnderscore = (string) => string?.replace(/ /g, '_').toLowerCase();

  useEffect(() => {
    const locationSearched = locations.find((l) => l.id === activeLocationId);
    if (!locationSearched?.parentId) {
      const parsedLocation = formatUnderscore(locationSearched?.label);
      setActiveState(parsedLocation);
    } else {
      setActiveState('');
    }
  }, [activeLocationId]);

  const onDownload = () => {
    const url = `https://api.us-resilience-map.vizzuality.com/api/v1/downloads/${activeState}`;
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `map-${activeState}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

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
              onClick={onDownload}
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
