import React from 'react';

import cx from 'classnames';

import Quote from 'layouts/stories/quote';

import VideoPlayer from 'layouts/stories/video-player';

import styles from './styles.module.scss';

const Section1 = () => {
  return (
    <div className={styles.section1}>
      <div className={styles.container}>
        <div className={styles.section1Title}>
          <span>
            A petri dish for
            <br />
            <span className={styles.underline}> resilience solutions</span>
          </span>
        </div>
        <div className={styles.section1Text}>
          <p>
            As a result of climate change, the US East Coast is increasingly at
            risk of coastal flooding, with the number of high-tide days rising
            significantly in more than 40 coastal communities. By 2050, high
            tide flooding in the US is likely to range between 25-75 days a
            year, compared to a record 20 days in 2020.
          </p>
          <p>
            Norfolk, Virginia, has one of the highest rates of relative sea
            level rise in the country. It has gone up by half a foot by 1992,
            which is twice the global average. At the same time, climate change
            is also causing an increase in the intensity, duration and frequency
            of rain events. These compounding events all play a part in
            increasing Norfolk&apos;s vulnerability.
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

const Section3 = () => {
  return (
    <div className={cx(styles.section3, styles.bgGray, styles.textWhite)}>
      <div className={styles.container}>
        <div className={styles.contentLeft}>
          <p className={cx(styles.textSecondary, styles.bold)}>
            {' '}
            The impacts of floods in Norfolk include:
          </p>
          <ul>
            <li className={cx(styles.listItem)}>
              Property damage to homes and cars
            </li>
            <li className={cx(styles.listItem)}>
              Disruption of transport infrastructure
            </li>
            <li className={cx(styles.listItem)}>
              Road flooding, cutting off vulnerable communities from the city
            </li>
            <li className={cx(styles.listItem)}>
              Disrupted education due to safety concerns for children, which has
              long term social and economic consequences
            </li>
            <li className={cx(styles.listItem)}>
              Heightened stress and anxiety
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Section4 = () => {
  return (
    <div className={cx(styles.section4, styles.bgWhite)}>
      <div>
        <div className={cx(styles.col, styles.colLeft)} />
        <div className={cx(styles.col, styles.colRight, styles.textGray)}>
          <p>
            A combination of disinvestment and historic decisions to build
            public housing in flood-prone areas means the poorest and most
            vulnerable city residents endure the biggest impact of the floods.
          </p>
          <p>
            Since 2015, Norfolk&apos;s city government has implemented a range
            of resilience through international consultation, private and public
            sector collaboration, and community-led engagement to tackle its
            flooding crisis. The city aims to be a hub of experimentation and
            climate innovation. It hopes that by trying a range of new ideas, it
            can invite city leaders across the US to see what works in tackling
            flooding and inspire others to follow its lead.
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
        text="We’re building big infrastructure and a bigger vision. We’ve talked
        about Norfolk being a petri dish to come and test resilience
        solutions. All our projects on flooding are so interconnected. We’re
        working with people around community and coastal resilience."
        image="/assets/images/stories/norfolk/nf_people_crouch_lori.jpg"
        authorName="Lori Crouch"
        authorPosition="Director of Communications"
        authorCompany="City of Norfolk"
      />
    </div>
  );
};

const LosAngeles = () => {
  return (
    <div className={styles.stories}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
};

export default LosAngeles;
