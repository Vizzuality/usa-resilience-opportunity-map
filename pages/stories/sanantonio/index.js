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

const Section5 = () => {
  return (
    <div className={cx(styles.bgPrimary, styles.quoteContainer)}>
      <Quote
        text="We had a panic situation in terms of the long-term economic and
        growth prospects for San Antonio. We had a major employer that was
        saying: if you don't get a handle on this, we're not going to keep our
        headquarters here. We felt like we were developing a reputation for
        being in a water crisis."
        image="/assets/images/stories/sanantonio/sa_people_karen_guz.jpg"
        authorName="Karen Guz"
        authorPosition="CONSERVATION DIRECTOR"
        authorCompany="San Antonio Water System (SAWS)"
      />
    </div>
  );
};

const Section12 = () => {
  return (
    <div className={cx(styles.bgPrimary, styles.quoteContainer)}>
      <Quote
        text="Our landscape care class is simple. We show people they don’t need to
        plant a ton, nor do they need an irrigation system to have a garden.
        We teach them proper watering techniques and how to care for native
        plants that don’t require a lot of water. We teach people how to garden
        where they are getting food, fresh greens, fresh salad, fresh tomatoes."
        image="/assets/images/stories/sanantonio/sa_people_anna_vogler.jpeg"
        authorName="Anna Vogler"
        authorPosition="WATER CONSERVATION COORDINATOR"
        authorCompany="Master Gardeners"
      />
    </div>
  );
};

const Section14 = () => {
  return (
    <div className={cx(styles.bgSecondary, styles.quoteContainer)}>
      <Quote
        text="We call it “plant by numbers.” If you aren't a gardener, and you just
        want someone to tell you what to do, we will give you a variety of plans
        for your home. We get them to think about: what are you trying to
        change? Then, we give them a plan."
        image="/assets/images/stories/sanantonio/sa_people_karen_guz.jpg"
        authorName="Karen Guz"
        authorPosition="CONSERVATION DIRECTOR"
        authorCompany="San Antonio Water System (SAWS)"
      />
    </div>
  );
};

const Section16 = () => {
  return (
    <div className={cx(styles.bgPrimary, styles.quoteContainer)}>
      <Quote
        text="We are stewards of the earth, and we are responsible for properly caring
        for it. The more people we teach to use these simple, replicable
        solutions, and the more resilient landscapes we have the better off we
        will all be."
        image="/assets/images/stories/sanantonio/sa_people_anna_vogler.jpeg"
        authorName="Anna Vogler"
        authorPosition="WATER CONSERVATION COORDINATOR"
        authorCompany="Master Gardeners"
      />
    </div>
  );
};

const SanAntonio = () => {
  return (
    <div className={styles.stories}>
      <Section1 />
      <Section2 />
      <Section5 />
      <Section12 />
      <Section14 />
      <Section16 />
      <MetaFooter exploreLink="/explore?id=227137" />
    </div>
  );
};

export default SanAntonio;
