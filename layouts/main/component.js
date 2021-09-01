import React from 'react';
import PropTypes from 'prop-types';

export default function Main({ children }) {
  Main.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return <main className="c-main">{children}</main>;
}
