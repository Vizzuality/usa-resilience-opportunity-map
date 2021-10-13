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
            Tackling drought and
            <br />
            saving water through
            <br />
            <span className={styles.underlinePrimary}>
              {' '}
              resilient gardening
            </span>
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

const Section3 = () => {
  return (
    <div className={cx(styles.section3, styles.bgGray)}>
      <div>
        <div className={cx(styles.col, styles.colLeft)} />
        <div className={cx(styles.col, styles.colRight)}>
          <p>
            The existing response to dry weather and drought was threatening the
            long-term economic prospects of San Antonio. Businesses that had
            planned to set up in the region threatened to pull out, believing it
            was no longer a safe and productive place of work. The city was
            getting a reputation for being poor stewards of its water.
          </p>
          <p>
            Things came to a head when the U.S. Fish and Wildlife Department
            demanded San Antonio become less dependent on the Edwards Aquifer
            for its local water supply to ensure habitat conservation and the
            continued reliability of the water source. This had been the city’s
            primary water supply through heavy rainfall and during drought.
          </p>
          <p>
            Without the Edwards Aquifer offering a reliable water supply, San
            Antonio was at greater risk of experiencing frequent water
            shortages. This led to concerns from local residents about how the
            water limitations would impact their access to clean water for
            everyday needs.
          </p>
        </div>
      </div>
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

const Section10 = () => {
  return (
    <div className={cx(styles.section10, styles.bgWhite)}>
      <div>
        <div className={cx(styles.col, styles.colLeft)} />
        <div className={cx(styles.col, styles.colRight, styles.textGray)}>
          <h5 className={cx(styles.sectionTitle)}>A City of Gardeners</h5>
          <p>
            Fundamental to SAWS’ approach is empowering people to plant gardens
            that can save water while promoting urban horticulture. Homeowners
            can receive training in how to create a resilient garden that
            doesn’t require watering. SAWS works in partnership with the Bexar
            County Master Gardeners, a nonprofit dedicated to educating people
            about urban horticulture. Alongside decorative plants, the Bexar
            County Master Gardeners support homeowners to grow their own fruit
            and vegetables, promoting food sustainability.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section11 = () => {
  return (
    <div className={cx(styles.section11, styles.bgGray)}>
      <div>
        <div className={cx(styles.col, styles.colRight)} />
        <div className={cx(styles.col, styles.colLeft, styles.textWhite)}>
          <p>
            The Master Gardeners offer training courses, workshops, a gardening
            library, and more. The program’s 260 members serve a population of
            over 2 million residents. They delivered 2,684 continuing education
            sessions throughout 2020, totaling 9,818 volunteer hours.
          </p>
          <p>
            The Bexar County Master Gardeners recommend fruit and vegetable
            plants that don’t require significant watering and often remind
            participants in their workshops that this won’t only help conserve
            water, but will allow community members to readily grow and access
            food. When watering is required, they show residents how to reuse
            water from around the home, rather than running the tap or hose.
          </p>
        </div>
      </div>
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

const Section13 = () => {
  return (
    <div className={cx(styles.section13, styles.bgWhite)}>
      <div>
        <div className={cx(styles.col, styles.colLeft)} />
        <div className={cx(styles.col, styles.colRight, styles.textGray)}>
          <p>
            Since the Master Gardeners work in partnership with the rebate
            program, low-income residents can benefit from their support. They
            make sure to teach urban horticulture skills that range from the
            rudimentary to the more sophisticated to make it more accessible for
            everyone. Teaching people how to grow their own food sustainably can
            also help low-income families access fresh vegetables while saving
            money on their monthly utility bill.
          </p>
        </div>
      </div>
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

const Section15 = () => {
  return (
    <div className={cx(styles.section15, styles.bgWhite)}>
      <div>
        <div className={cx(styles.col, styles.colRight)} />
        <div className={cx(styles.col, styles.colLeft, styles.textGray)}>
          <p>
            The Bexar County Master Gardeners provide over 200 workshops and
            presentations every year. In addition to teaching people how to
            develop their gardens, they also offer a rewards program where
            people attending multiple educational events are given a coupon to
            spend on plants and tools.
          </p>
        </div>
      </div>
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
      <Section3 />
      <Section5 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Section13 />
      <Section14 />
      <Section15 />
      <Section16 />
      <MetaFooter exploreLink="/explore?id=227137" />
    </div>
  );
};

export default SanAntonio;
