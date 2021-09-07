import React from 'react';

import cx from 'classnames';

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

const NewYork = () => {
  return (
    <div className={styles.stories}>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default NewYork;
