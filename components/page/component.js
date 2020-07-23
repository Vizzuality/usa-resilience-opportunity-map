import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Page = ({ children }) => {
  return (
    <div
      className="c-page"
      style={{
        originX: '50%', // stylelint-disable-line
        originY: '50%', // stylelint-disable-line
      }}
    >
      {children}
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
