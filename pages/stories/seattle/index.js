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

const Section4 = () => {
  return (
    <div className={cx(styles.section4, styles.bgWhite, styles.textGray)}>
      <div className={styles.contentLeft}>
        <img
          src="/assets/images/stories/seattle/st_section_4_bg.png"
          className={styles.section4Img}
          alt=""
        />
      </div>
      <div className={cx(styles.contentRight, styles.container)}>
        <p>
          Alongside heavy rain, the water along Seattle’s Puget shoreline has
          risen by more than six inches in the past century. As global
          temperatures continue to rise, it’s estimated that Seattle will
          experience 10 inches of sea level rise by 2050.
        </p>
        <p>
          In response to the growing precipitation crisis, Seattle’s city
          government instigated several green stormwater infrastructure (GSI)
          projects, designed to empower residents to implement simple solutions
          that manage the impact of stormwater flooding in their own homes.
        </p>
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

const Section6 = () => {
  return (
    <div className={cx(styles.section6, styles.bgLightBlue)}>
      <div>
        <div className={cx(styles.col, styles.colRight)} />
        <div className={cx(styles.col, styles.colLeft, styles.textGray)}>
          <h5 className={cx(styles.sectionTitle)}>
            Turning Stormwater Run-Off into Stormwater Soak In
          </h5>
          <p>
            Given 60% of Seattle’s land area is single-family residential,
            stormwater run-off is of particular concern to property owners. The
            City of Seattle decided to implement a resilience-building
            intervention, known as the RainWise Program. The Program encourages
            homeowners to take simple steps in their homes and gardens to
            install green stormwater infrastructure and implement measures
            including:
          </p>
          <ul>
            <li className={cx(styles.listItem)}>
              <span className={cx(styles.textPrimary, styles.bold)}>
                Planting water-absorbing trees
              </span>
              {' '}
              (i.e., conifers)
            </li>
            <li className={cx(styles.listItem)}>
              <span className={cx(styles.textPrimary, styles.bold)}>
                Reducing paved areas or impermeable surfaces
              </span>
              {' '}
              in gardens and drives
            </li>
            <li className={cx(styles.listItem)}>
              <span className={cx(styles.textPrimary, styles.bold)}>
                Improving soil quality
              </span>
              {' '}
              to increase stormwater absorption with compost and mulch
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Section7 = () => {
  return (
    <div className={cx(styles.section7, styles.textWhite, styles.bgWhite)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.section7Wrapper)}>
          <ul className={cx(styles.col, styles.colLeft, styles.textGray)}>
            <li className={cx(styles.listItem)}>
              <span className={cx(styles.textPrimary, styles.bold)}>
                Introducing permeable pavements
              </span>
              {' '}
              such as porous flagstones or gravel that absorbs stormwater
            </li>
            <li className={cx(styles.listItem)}>
              <span className={cx(styles.textPrimary, styles.bold)}>
                Installing a cistern
              </span>
              {' '}
              that can collect rainwater for use in the home and garden
            </li>
            <li className={cx(styles.listItem)}>
              <span className={cx(styles.textPrimary, styles.bold)}>
                Building a rain garden
              </span>
              , a shallow depression that can hold stormwater
            </li>
            <li className={cx(styles.listItem)}>
              <span className={cx(styles.textPrimary, styles.bold)}>
                Digging a rock-filled trench
              </span>
              {' '}
              in the garden that can absorb stormwater
            </li>
          </ul>
        </div>
      </div>
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

const Section9 = () => {
  return (
    <div className={cx(styles.section9, styles.textWhite, styles.bgSecondary)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.section9Wrapper)}>
          <div className={cx(styles.col, styles.colLeft)}>
            <p>
              To get the rebate, homeowners have to visit the website and prove
              their eligibility by providing their zip code. Some newly-built
              homes are not eligible for the rebate as they will already comply
              with the current stormwater code.
            </p>
            <p>
              If a homeowner is eligible, they can initiate a cistern or rain
              garden installation from a list of approved contractors working
              with Seattle Public Utilities. The homeowner selects a contractor
              to perform a home visit and installation.
            </p>
            <p>
              The rebate can be up to $4.00 per square foot of rooftop run-off,
              and the average rebate is $4,600. It is funded through a new
              financial program called the Green Infrastructure Rebate Advance
              Fund (GIRAF).
            </p>
          </div>
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
      <MetaFooter exploreLink="/explore?id=227569" />
    </div>
  );
};

export default Seattle;
