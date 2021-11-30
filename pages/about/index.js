import React from 'react';
import PropTypes from 'prop-types';
import Main from 'layouts/main';
import { MediaContextProvider, Media } from 'components/media';

const CITATIONS = [
  {
    indicator: 'Coastal Flood Risk',
    citation:
      'Hofste, R., S. Kuzma, S. Walker, E.H. Sutanudjaja, et. al. 2019. “Aqueduct 3.0: Updated DecisionRelevant Global Water Risk Indicators.” Technical Note. Washington, DC: World Resources Institute,',
    link: 'https://www.wri.org/publication/aqueduct-30',
  },
  {
    indicator: 'Drought Risk',
    citation:
      'Hofste, R., S. Kuzma, S. Walker, E.H. Sutanudjaja, et. al. 2019. “Aqueduct 3.0: Updated DecisionRelevant Global Water Risk Indicators.” Technical Note. Washington, DC: World Resources Institute,',
    link: 'https://www.wri.org/publication/aqueduct-30',
  },
  {
    indicator: 'Extreme Heat Days',
    citation:
      'Gassert, F., E. Cornejo, and E. Nilson. 2021. “Making Climate Data Accessible: Methods for Producing NEX-GDDP and LOCA Downscaled Climate Indicators” Technical Note. Washington, DC: World Resources Institute,',
    link: 'https://doi.org/10.46830/writn.19.00117',
  },
  {
    indicator: 'Extreme Precipitation Days',
    citation:
      'Gassert, F., E. Cornejo, and E. Nilson. 2021. “Making Climate Data Accessible: Methods for Producing NEX-GDDP and LOCA Downscaled Climate Indicators” Technical Note. Washington, DC: World Resources Institute,',
    link: 'https://doi.org/10.46830/writn.19.00117',
  },
  {
    indicator: 'Riverine Flood Risk',
    citation:
      'Hofste, R., S. Kuzma, S. Walker, E.H. Sutanudjaja, et. al. 2019. “Aqueduct 3.0: Updated DecisionRelevant Global Water Risk Indicators.” Technical Note. Washington, DC: World Resources Institute,',
    link: 'https://www.wri.org/publication/aqueduct-30',
  },
  {
    indicator: 'Social Vulnerability Layers',
    citation:
      'Centers for Disease Control and Prevention/ Agency for Toxic Substances and Disease Registry/ Geospatial Research, Analysis, and Services Program. CDC Social Vulnerability Index 2018 Database US.',
    link:
      'https://www.atsdr.cdc.gov/placeandhealth/svi/data_documentation_download.html',
  },
  {
    indicator: 'Wildfires',
    citation:
      'Artés Vivancos, Tomàs; San-Miguel-Ayanz, Jesús (2018): Global Wildfire Database for GWIS. PANGAEA,',
    link: 'https://doi.org/10.1594/PANGAEA.895835',
    supplement:
      'Supplement to: Artés Vivancos, Tomàs; Oom, Duarte; de Rigo, Daniele; Houston Durrant, Tracy; Maianti, Pieralberto; Libertá, Giorgio; San-Miguel-Ayanz, Jesús (2019): A global wildfire dataset for the analysis of fire regimes and fire behaviour. Scientific Data, 6(1),',
    supplementLink: 'https://doi.org/10.1038/s41597-019-0312-2',
  },
];

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
        <h1>About the Map.</h1>
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
            Resilience Center has developed and deployed a visualization tool
            that will help make people and communities more resilient by
            offering a path forward for cities by sharing proven solutions to
            address their climate risks and social vulnerabilities. The icons on
            the interactive map feature ten cities across the United States that
            successfully implemented resilience-building interventions. This map
            uniquely highlights best practices that are helping reduce climate
            risks in cities and can help cities identify their opportunity areas
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
          <p>
            All the climate risk layers have been downscaled to match the
            original spatial granularity levels of social-vulnerability layers.
            These levels include the following geographic subdivisions: States,
            Counties, and Census tracts.
          </p>
        </div>

        <div className="about-section">
          <h2>Rankings</h2>
          <p>
            We ranked Census tracts within the entire United States against one
            another, for mapping and analysis of relative risk/vulnerability in
            multiple states, or across the U.S. as a whole. Tract rankings are
            based on quantiles. Quantiles are cut points dividing the range of
            the data into contiguous intervals with equal probabilities. In this
            particular case we use quintiles to divide the datasets into 5
            subsets of (nearly) equal sizes. To each of these subsets we assign
            a risk/vulnerability category, namely: Low, Low–medium, Medium,
            Medium–high, High. In the legends we display the corresponding raw
            indicator value ranges of each category.
          </p>
        </div>

        <div className="about-section">
          <h2>Citations</h2>
          {CITATIONS.map((c) => {
            const { indicator, citation, link, supplement, supplementLink } = c;
            return (
              <div className="citation">
                <h5>{indicator}</h5>
                <p>
                  {citation}
                  {' '}
                  <a href={link} target="_blank" rel="noreferrer">
                    {link}
                  </a>
                  . 
                  {' '}
                  {supplement}
                  {' '}
                  <a href={supplementLink} target="_blank" rel="noreferrer">
                    {supplementLink}
                  </a>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </AboutWrapper>
  );
};

export default About;
