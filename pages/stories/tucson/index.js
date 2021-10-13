import React from 'react';

import cx from 'classnames';

import MetaFooter from 'layouts/stories/meta-footer';
import Quote from 'layouts/stories/quote';
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

const Section6 = () => {
  return (
    <div className={cx(styles.bgPrimary, styles.quoteContainer)}>
      <Quote
        text="Even though the Tucson population is growing, the water consumption has been declining. Our water consumption has gone down to the level of what we were in 1970. It is amazing."
        image="/assets/images/stories/tucson/tu_people_irene_ogata.jpg"
        authorName="Irene Ogata"
        authorPosition="Urban Landscape Manager"
        authorCompany="Tucson Water"
      />
    </div>
  );
};

const Section13 = () => {
  return (
    <div className={cx(styles.bgPrimary, styles.quoteContainer)}>
      <Quote
        text="All families are interested in doing things to help their families but some of them just have different resources available to do it. Look for ways to get over the barriers of why people aren't participating in your programs, and then try to reduce those barriers."
        image="/assets/images/stories/tucson/tu_people_irene_ogata.jpg"
        authorName="Ann Marie Wolf"
        authorPosition="Director"
        authorCompany="Sonora Environmental Research Institute (SERI)"
      />
    </div>
  );
};

const Tucson = () => {
  return (
    <div className={styles.stories}>
      <Section1 />
      <Section2 />
      <Section6 />
      <Section13 />
      <MetaFooter exploreLink="/explore?id=224706" />
    </div>
  );
};

export default Tucson;
