import React from 'react';

// import cx from 'classnames';

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

const Charlotte = () => {
  return (
    <div className={styles.stories}>
      <Section1 />
      <Section2 />
      {/* <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Section13 />
      <Section14 />
      <Section15 />
      <Section16 />
      <Section17 /> */}
    </div>
  );
};

export default Charlotte;
