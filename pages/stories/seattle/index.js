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

const Section5 = () => {
  return (
    <div className={cx(styles.bgPrimary, styles.quoteContainer)}>
      <Quote
        text="In high-risk areas, the streets are flooded, people experience sewer backups which has a real ‘ick’ factor, and water comes in off the street into private property. As climate change worsens, this will only become a bigger problem."
        image="/assets/images/stories/seattle/st_people_tracy_tackett.jpg"
        authorName="Tracy Tackett"
        authorPosition="GSI EXPANSION INITIATIVE MANAGER"
        authorCompany="City of Seattle Public Utilities"
      />
    </div>
  );
};

const Section11 = () => {
  return (
    <div className={cx(styles.bgPrimary, styles.quoteContainer)}>
      <Quote
        text="The main value of getting our cistern installed was for water conservation. It allows us to collect rainwater that would otherwise flood our home or surrounding streets to water our plants and maintain our garden."
        image="/assets/images/stories/seattle/st_people_jonathan_eisenberg.png"
        authorName="Jonathan Eisenberg"
        authorPosition=""
        authorCompany="RainWise customer"
      />
    </div>
  );
};
const Section13 = () => {
  return (
    <div className={cx(styles.bgSecondary, styles.quoteContainer)}>
      <Quote
        text="We can’t solve everything by ourselves. We need to work in partnership with our community, other city government departments, and with philanthropists."
        image="/assets/images/stories/seattle/st_people_tracy_tackett.jpg"
        authorName="Tracy Tackett"
        authorPosition="GSI EXPANSION INITIATIVE MANAGER"
        authorCompany="City of Seattle Public Utilities"
      />
    </div>
  );
};

const Seattle = () => {
  return (
    <div className={styles.stories}>
      <Section1 />
      <Section2 />
      <Section5 />
      <Section11 />
      <Section13 />
      <MetaFooter exploreLink="/explore?id=227569" />
    </div>
  );
};

export default Seattle;
