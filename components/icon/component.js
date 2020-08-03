import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ icon, className }) => (
  <svg
    className={`c-icon ${className}`}
    viewBox={icon?.viewBox || '0 0 32 32'}
    style={{ display: 'block' }}
  >
    <use xlinkHref={`#${icon?.id || icon}`} />
  </svg>
);

Icon.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func,
  ]),
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
};

export default Icon;
