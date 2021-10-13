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

const Section3 = () => {
  return (
    <div className={cx(styles.section3, styles.bgSecondary)}>
      <div>
        <div className={cx(styles.col, styles.colRight)} />
        <div className={cx(styles.col, styles.colLeft, styles.textWhite)}>
          <p>
            This includes flooded homes and blocked roads – preventing people
            from performing regular daily activities, causing emotional
            distress, and expensive property damage.
          </p>
          <p>
            Flooding also causes sewer backup, where sewer water pours into
            bathtubs and toilets. Not only does this cause damage to property,
            but it poses a serious risk to sanitation and public health safety.
          </p>
          <p>
            The neighborhoods suffering the worst impacts of flooding are often
            populated by low-income, immigrant families and underserved minority
            groups.
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

const Section8 = () => {
  return (
    <div className={cx(styles.section8, styles.bgGray)}>
      <div>
        <div className={cx(styles.col, styles.colRight)} />
        <div className={cx(styles.col, styles.colLeft, styles.textWhite)}>
          <p>
            These resilience-building measures allow stormwater to soak into the
            ground or be collected, rather than run off roofs and gutters that
            can lead to further flooding and divert wastewater back into the
            ocean or waterways.
          </p>
          <p>
            The RainWise program is promoted online, in postal mailings, at
            public events such as farmers’ markets, and through Be RainWise
            signage that appears along roadsides throughout Seattle.
          </p>
          <p>
            Seattle Public Utilities, which runs the RainWise program, offers a
            rebate to residents in targeted sewer basin locales to cover the
            costs of the two more expensive interventions: installing a cistern
            and installing a rain garden.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section10 = () => {
  return (
    <div className={cx(styles.section10, styles.bgWhite)}>
      <div>
        <div className={cx(styles.col, styles.colRight)} />
        <div className={cx(styles.col, styles.colLeft, styles.textGray)}>
          <p>
            The King County Conservation District provided a $40,000 grant to
            start the rebate program in 2010. Since then, Seattle Public
            Utilities has spent $2.5 million on rebates, demonstrating its broad
            reach and use across the city. The program contributes to Seattle’s
            goal of managing 700 million gallons of stormwater annually using
            green stormwater infrastructure by 2025.
          </p>
          <p>
            Over 1,900 RainWise projects have been completed, collectively
            managing over 25 million gallons (53 acres of roof surface) of
            stormwater annually.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section12 = () => {
  return (
    <div className={cx(styles.section12, styles.bgWhite)}>
      <div>
        <div className={cx(styles.col, styles.colLeft)} />
        <div className={cx(styles.col, styles.colRight, styles.textGray)}>
          <h5 className={cx(styles.sectionTitle)}>
            Green Stormwater Infrastructure
          </h5>
          <p>
            Alongside the RainWise Program, Seattle Public Utilities is
            investing more broadly in green stormwater infrastructure.
          </p>
          <p>
            This infrastructure is designed to collect, slow, and treat rain
            once it hits the earth and becomes stormwater to reduce flooding.
          </p>
          <p>
            These include designing sidewalks with rain gardens, a form of
            vegetation stormwater management.
          </p>
          <p>
            Notably, many of the interventions – whether in a private garden or
            a public sidewalk – are designed with beautification in mind, making
            Seattle a greener and more ecologically diverse place to live.
            Increasing the number of parks in a city and ensuring everyone has
            access to green spaces is crucial to equity and resilience. The
            RainWise program is making Seattle greener and positively impacting
            the surrounding community.
          </p>
        </div>
      </div>
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
      <Section3 />
      <Section5 />
      <Section8 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Section13 />
      <MetaFooter exploreLink="/explore?id=227569" />
    </div>
  );
};

export default Seattle;
