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
            Rebates for
            <br />
            <span className={styles.underline}> rainwater</span>
          </span>
        </div>
        <div className={styles.section1Text}>
          <p>
            In Arizona, the climate crisis has intensified drought and water
            shortages so much that, for the first quarter of 2021, the majority
            of the state was either in severe, extreme or exceptional drought.
          </p>
          <p>
            Worse, the extent of extreme and exceptional droughts has increased
            dramatically over the past decade.
          </p>
          <p>
            In Tucson, the community has long been dependent on groundwater
            flowing from the snowy north into the dry south. Melted water from
            the snowpacks in Colorado traditionally flows into Lake Mead,
            providing a water supply even in the height of summer.
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
        thumbnail="/assets/images/stories/tucson/tu_video_thumb.png"
        url="https://www.youtube.com/watch?v=s8UJCYmwhQg&ab_channel=AtlanticCouncil"
      />
    </div>
  );
};

const Tucson = () => {
  return (
    <div className={styles.stories}>
      <Section1 />
      <Section2 />
      <MetaFooter exploreLink="/explore?id=224706" />
    </div>
  );
};

export default Tucson;
