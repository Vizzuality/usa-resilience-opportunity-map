import React from 'react';

// import cx from 'classnames';

import MetaFooter from 'layouts/stories/meta-footer';
// import Quote from 'layouts/stories/quote';
import VideoPlayer from 'layouts/stories/video-player';

import styles from './styles.module.scss';

const Section1 = () => {
  return (
    <div className={styles.section1}>
      <div className={styles.container}>
        <div className={styles.section1Title}>
          <span>
            Getting RainWise
            <span className={styles.underline}> rainwater</span>
            <br />
            in Seattle
          </span>
        </div>
        <div className={styles.section1Text}>
          <p>
            Seattle is well-known for its heavy rainfall. With 150 days of rain
            a year, the city gets around 37 inches of rainwater annually.
          </p>
          <p>
            Extreme rainstorms have increased by 30% in Seattle since 2003. The
            growing climate crisis has intensified the levels of rain which,
            combined with rising sea levels, has led to flooding that causes
            disruption and disturbances across the city.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className={styles.section2}>
      <VideoPlayer
        thumbnail="/assets/images/stories/seattle/st_video_thumb.png"
        url="https://www.youtube.com"
      />
    </div>
  );
};

const Seattle = () => {
  return (
    <div className={styles.stories}>
      <Section1 />
      <Section2 />
      <MetaFooter exploreLink="/explore?id=227569" />
    </div>
  );
};

export default Seattle;
