import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

export default function Main(props) {
  const { children } = props;

  return <main className="c-main">{children}</main>;
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};