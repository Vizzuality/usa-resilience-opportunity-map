import React from 'react';
import PropTypes from 'prop-types';
import Main from 'layouts/main';
import { MediaContextProvider, Media } from 'components/media';

function AboutWrapper({ children }) {
  AboutWrapper.propTypes = {
    children: PropTypes.array,
  };

  return (
    <MediaContextProvider>
      <Media lessThan="small">
        <Main>
          <div className="c-about --mobile">{children}</div>
        </Main>
      </Media>
      <Media greaterThanOrEqual="small">
        <Main>
          <div className="c-about">{children}</div>
        </Main>
      </Media>
    </MediaContextProvider>
  );
}

const About = () => {
  return (
    <AboutWrapper>
      <div className="about-title">
        <div className="about-line" />
        <h1>About the US Climate Resilience Map</h1>
      </div>
      <div className="about-text wrapper">
        <div className="about-shadow" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </AboutWrapper>
  );
};

export default About;
