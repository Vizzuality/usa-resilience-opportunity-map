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
            Tackling drought and saving water through
            <br />
            <span className={styles.underline}> resilient gardening</span>
          </span>
        </div>
        <div className={styles.section1Text}>
          <p>
            According to the U.S. Drought Monitor, San Antonio, Texas, is
            “abnormally dry.” The city experiences high temperatures and long
            dry spells, but also the occasional heavy downpour that can see
            months worth of rain drench the city in a matter of hours.
          </p>
          <p>
            In this erratic climate, water conservation has become a matter of
            urgency.
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
        thumbnail="/assets/images/stories/sanantonio/sa_video_thumb.png"
        url="https://www.youtube.com"
      />
    </div>
  );
};

const SanAntonio = () => {
  return (
    <div className={styles.stories}>
      <Section1 />
      <Section2 />
      <MetaFooter exploreLink="/explore?id=227137" />
    </div>
  );
};

export default SanAntonio;
