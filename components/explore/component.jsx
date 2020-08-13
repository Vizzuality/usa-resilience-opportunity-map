import React from 'react';
import PropTypes from 'prop-types';
import ExploreMap from 'components/explore/map';
import ExploreSidebar from 'components/explore/sidebar';
import Autocomplete from 'components/autocomplete';
import Button from 'components/button';

export default function Explore({ locations, activeLocationId }) {
  Explore.propTypes = {
    locations: PropTypes.array,
    activeLocationId: PropTypes.string,
  };

  return (
    <div className="c-explore">
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
        <Button className="search-btn" link="/explore?id=0">
          All states view
        </Button>
      </div>
      <div className="map-wrapper">
        <ExploreSidebar />
        <ExploreMap />
      </div>
    </div>
  );
}
