import React from 'react';
import PropTypes from 'prop-types';

const MapControls = ({ children }) => {
  return <div className="c-map-controls">{children}</div>;
};

MapControls.propTypes = {
  children: PropTypes.object,
};

export default MapControls;
