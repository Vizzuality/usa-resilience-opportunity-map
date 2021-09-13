import React from 'react';

import cx from 'classnames';

// import Quote from 'layouts/stories/quote';

import VideoPlayer from 'layouts/stories/video-player';

import styles from './styles.module.scss';

const Section1 = () => {
  return (
    <div className={styles.section1}>
      <div className={styles.container}>
        <div className={styles.section1Title}>
          <span>
            Community mobilization
            <br />
            for 
            {' '}
            <span className={styles.underline}>cool neighborhoods</span>
          </span>
        </div>
        <div className={styles.section1Text}>
          <p>
            New York City has become increasingly vulnerable to events linked to
            the climate crisis, including hurricanes like Superstorm Sandy in
            2012, coastal flooding, and extreme heat.
          </p>
          <p>
            The city is adjacent to 120,000 acres of undeveloped land that
            represents a clear wildfire risk. In 2010 the Fourmile Fire
            destroyed 169 homes, 6181 acres and led to $217 million in insured
            losses.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className={styles.section2}>
      <VideoPlayer url="https://www.youtube.com/embed/Iwd_ei8e150" />
    </div>
  );
};

const Section3 = () => {
  return (
    <div className={cx(styles.section3, styles.bgSecondary)}>
      <div>
        <div className={cx(styles.col, styles.colLeft)} />
        <div className={cx(styles.col, styles.colRight)}>
          <p>
            Residents most impacted by extreme heat are located in former
            redlined zones – primarily Black neighborhoods, including Harlem and
            the Bronx. Air pollution is around 20 times more severe in some
            parts of the Bronx than in the rest of the city, leading to higher
            than average temperatures.
          </p>
          <p>
            These are neighborhoods where there is significantly less tree
            canopy, higher levels of air pollution, a history of disinvestment,
            and where residents sometimes struggle to afford amenities like air
            conditioning.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section4 = () => {
  return (
    <div className={cx(styles.section4, styles.bgLightBlue, styles.textGray)}>
      <div className={styles.container}>
        <div className={styles.contentRight}>
          <img
            src="/assets/images/stories/norfolk/nf_section_4_bg.png"
            className={styles.section4Img}
            alt=""
          />
        </div>
        <div className={styles.contentLeft}>
          <h5 className={cx(styles.sectionTitle)}>Cool Neighborhoods NYC</h5>
          <p>
            To address extreme heat, the New York City Mayor’s Office worked
            with numerous partners including community groups, the New York City
            Panel on Climate Change, Columbia University, New York City
            Emergency Management Agency, New York City Small Business Service,
            and the Department of Public Health to initiate a number of heat
            mitigation programs and tools as part of Cool Neighborhoods NYC.
          </p>
          <p>
            The program is New York City’s first heat mitigation project.
            Launched in 2017 the plan is a comprehensive resilience strategy
            that is informed by health and climate data. The plan focuses
            investments and programming in the most vulnerable and underserved
            communities in NYC.
          </p>
          <p>Examples of initiatives within the project are:</p>
          <ul>
            <li className={cx(styles.listItem)}>
              Creating a heat vulnerability index
            </li>
            <li className={cx(styles.listItem)}>
              Developing an air conditioning program
            </li>
            <li className={cx(styles.listItem)}>Increasing the tree canopy</li>
            <li className={cx(styles.listItem)}>Building cooling centers</li>
            <li className={cx(styles.listItem)}>NYC CoolRoofs Program</li>
            <li className={cx(styles.listItem)}>
              Be A Buddy – a community collaboration
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Norfolk = () => {
  return (
    <div className={styles.stories}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default Norfolk;
