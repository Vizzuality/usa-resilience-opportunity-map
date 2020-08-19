import React from 'react';
import PropTypes from 'prop-types';
import Url from 'components/url';

export default function Main(props) {
  Main.propTypes = {
    urlParams: PropTypes.shape({}),
    children: PropTypes.node.isRequired,
  };
  const { children, urlParams } = props;

  return (
    <main className="c-main">
      {children}
      <Url queryParams={urlParams} />
    </main>
  );
}
