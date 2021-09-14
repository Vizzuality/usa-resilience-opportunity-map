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
        <h1>About the data.</h1>
      </div>
      <div className="about-text wrapper">
        <div className="about-shadow" />
        <div className="about-section">
          <h2>About the US Climate Resilience Map</h2>
          <p>
            Across the globe, climate-driven natural disasters are increasing in
            intensity and frequency. The United States is far from immune to
            these impacts – big and small communities alike are burning,
            flooding, and overheating due to rising temperatures. While the
            public is increasingly aware of the broader impacts of climate
            change, the nearer-term and closer-to-home effects of a changing
            climate are not in full focus. If implemented effectively,
            on-the-ground interventions can reduce the impacts of these events
            by protecting people and property – making these communities more
            resilient.
          </p>
          <p>
            The Atlantic Council’s Adrienne Arsht – Rockefeller Foundation
            Resilience Center, with support from JPMorgan Chace & Co. and the
            Rockefeller Foundation, have developed and deployed a visualization
            tool that will help make people and communities more resilient by
            offering a path forward for cities by sharing proven examples of
            successful interventions to address their climate risks and social
            vulnerabilities. Unlike other climate-oriented maps, this map will
            highlight best practices that are helping reduce climate risks in
            cities and will help cities identify their own opportunity areas
            where these interventions can be applied and scaled.
          </p>
        </div>
        <div className="about-section">
          <h2>About the Data</h2>
          <p>
            The US Climate Resilience Map: Pathways for City Solutions employs
            existing, open-source data collected from a variety of public
            sources. The data layers are organized into two categories, (1)
            climate risks and (2) social vulnerabilities. The climate risk
            layers include coastal flood risk, drought risk, extreme heat days,
            extreme precipitation days, riverine flood risk, and wildfires. The
            social vulnerability layers include fifteen layers grouped into
            sub-layers and four main layers, socioeconomic status, household
            composition and disability, minority status and language, and
            housing type and transportation.
          </p>
        </div>
        <div className="about-section">
          <h2>Citations</h2>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default About;
