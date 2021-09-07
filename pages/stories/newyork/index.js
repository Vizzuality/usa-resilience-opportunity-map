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
            Community mobilization
            <br />
            for 
            {' '}
            <span className={styles.underline}>cool neighborhoods</span>
          </span>
        </div>
        <div className={styles.section1Text}>
          <p>
            New York City has become increasingly vulnerable to events linked to
            the climate crisis, including hurricanes like Superstorm Sandy in
            2012, coastal flooding, and extreme heat.
          </p>
          <p>
            The city is adjacent to 120,000 acres of undeveloped land that
            represents a clear wildfire risk. In 2010 the Fourmile Fire
            destroyed 169 homes, 6181 acres and led to $217 million in insured
            losses.
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
    <div className={cx(styles.section3, styles.bgSecondary)}>
      <div>
        <div className={cx(styles.col, styles.colLeft)} />
        <div className={cx(styles.col, styles.colRight)}>
          <p>
            Residents most impacted by extreme heat are located in former
            redlined zones – primarily Black neighborhoods, including Harlem and
            the Bronx. Air pollution is around 20 times more severe in some
            parts of the Bronx than in the rest of the city, leading to higher
            than average temperatures.
          </p>
          <p>
            These are neighborhoods where there is significantly less tree
            canopy, higher levels of air pollution, a history of disinvestment,
            and where residents sometimes struggle to afford amenities like air
            conditioning.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section4 = () => {
  return (
    <div className={cx(styles.section4, styles.bgLightBlue, styles.textGray)}>
      <div className={styles.container}>
        <div className={styles.contentRight}>
          <img
            src="/assets/images/stories/newyork/ny_section_4_bg.png"
            className={styles.section4Img}
            alt=""
          />
        </div>
        <div className={styles.contentLeft}>
          <h5 className={cx(styles.sectionTitle)}>Cool Neighborhoods NYC</h5>
          <p>
            To address extreme heat, the New York City Mayor’s Office worked
            with numerous partners including community groups, the New York City
            Panel on Climate Change, Columbia University, New York City
            Emergency Management Agency, New York City Small Business Service,
            and the Department of Public Health to initiate a number of heat
            mitigation programs and tools as part of Cool Neighborhoods NYC.
          </p>
          <p>
            The program is New York City’s first heat mitigation project.
            Launched in 2017 the plan is a comprehensive resilience strategy
            that is informed by health and climate data. The plan focuses
            investments and programming in the most vulnerable and underserved
            communities in NYC.
          </p>
          <p>Examples of initiatives within the project are:</p>
          <ul>
            <li className={cx(styles.listItem)}>
              Creating a heat vulnerability index
            </li>
            <li className={cx(styles.listItem)}>
              Developing an air conditioning program
            </li>
            <li className={cx(styles.listItem)}>Increasing the tree canopy</li>
            <li className={cx(styles.listItem)}>Building cooling centers</li>
            <li className={cx(styles.listItem)}>NYC CoolRoofs Program</li>
            <li className={cx(styles.listItem)}>
              Be A Buddy – a community collaboration
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Section5 = () => {
  return (
    <div className={cx(styles.section5, styles.bgWhite, styles.textGray)}>
      <div className={styles.contentLeft}>
        <img
          src="/assets/images/stories/newyork/ny_section_5_bg.png"
          className={styles.section5Img}
          alt=""
        />
      </div>
      <div className={cx(styles.contentRight, styles.container)}>
        <h5 className={cx(styles.sectionTitle)}>Heat Vulnerability Index</h5>
        <p>
          The Department of Public Health and Columbia University partnered to
          develop Cool Neighborhoods NYC and the heat vulnerability index.
        </p>
        <p>
          It is a tool to understand what neighborhoods face the greatest risk
          from extreme heat and where to invest in green infrastructure,
          programing that supports social cohesion, such as the Be A Buddy
          program, and where to target outreach for cooling services such as
          cooling centers or the Home Energy Assistance Program.
        </p>
        <p>
          Using data generated by the index, the Mayor’s Office requested
          funding from the Department of Public Health for a range of cooling
          solutions for communities under the umbrella of the Cool Neighborhoods
          NYC project.
        </p>
      </div>
    </div>
  );
};

const Section6 = () => {
  return (
    <div className={cx(styles.bgPrimary, styles.quoteContainer)}>
      <Quote
        text="The heat vulnerability index is a data tool grounded in climate equity as a way to make investments."
        image="/assets/images/stories/newyork/ny_people_daphne_lundi.jpeg"
        authorName="Daphne Lundi"
        authorPosition="Deputy Director of Social Resikience"
        authorCompany="New York City Mayor´s Office"
      />
    </div>
  );
};

const Section7 = () => {
  return (
    <div className={cx(styles.section7, styles.bgGray, styles.textWhite)}>
      <div className={styles.container}>
        <div className={styles.contentRight}>
          <img
            src="/assets/images/stories/newyork/ny_section_7_bg.png"
            className={styles.section7Img}
            alt=""
          />
        </div>
        <div className={styles.contentLeft}>
          <h5 className={cx(styles.sectionTitle)}>Be A Buddy</h5>
          <p>
            At the heart of Cool Neighborhoods NYC are community partnerships,
            including the Be A Buddy program being implemented throughout
            various neighborhoods in Harlem, the Bronx, and Brooklyn.
          </p>
          <p>
            Be A Buddy is designed to prepare the community for future climate
            events through climate health education and community preparedness.
          </p>
          <p>
            The Hunts Point Section in the South Bronx, for instance, is an
            under-resourced, low-income neighborhood whose inhabitants often
            exhibit poor health outcomes, such as high levels of diabetes, heart
            disease, and obesity.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section8 = () => {
  return (
    <div className={cx(styles.section8, styles.bgGray, styles.textWhite)}>
      <div className={styles.contentLeft}>
        <img
          src="/assets/images/stories/newyork/ny_section_8_bg.png"
          className={styles.section8Img}
          alt=""
        />
      </div>
      <div className={cx(styles.contentRight, styles.container)}>
        <p>
          The Be A Buddy program is run out of community center, The Point,
          located in the Hunts Point Section. This community outreach
          organization is dedicated to youth development and the cultural and
          economic revitalization of the neighborhood. The program trains people
          of all ages in the neighborhood to support vulnerable residents.
        </p>
        <p>
          The support includes an Emergency Preparedness Program funded by the
          Department of Public Health as part of a pilot project. The target
          demographic of the program is vulnerable seniors who are at risk of
          extreme-heat-related illnesses such as asthma and cardiac arrest.
        </p>
      </div>
    </div>
  );
};

const Section9 = () => {
  return (
    <div className={cx(styles.bgSecondary, styles.quoteContainer)}>
      <Quote
        text="When there’s trouble, the folks that respond first are our neighbors.
        Being able to train each other and to be able to create plans around
        how we work together in the case of an emergency, is a very real
        and living thing for people at this point."
        image="/assets/images/stories/newyork/ny_people_danny_peralta.jpg"
        authorName="Danny Peralta"
        authorPosition="Managing Director"
        authorCompany="The Point"
      />
    </div>
  );
};

const Section11 = () => {
  return (
    <div className={cx(styles.bgPrimary, styles.quoteContainer)}>
      <Quote
        text="Everybody has their own communities already, that they are part
        of. How can we bring people in those communities together to
        form new networks?"
        image="/assets/images/stories/newyork/ny_people_aryanna_osorio.jpeg"
        authorName="Aryanna Osorio"
        authorPosition="Resilience Coordinator"
        authorCompany="Be a Buddy"
      />
    </div>
  );
};

const Section15 = () => {
  return (
    <div className={cx(styles.bgSecondary, styles.quoteContainer)}>
      <Quote
        text="It's critical to understand the work that's being done on the
        ground. For our work, particularly around preparedness, having
        those community partners has been really critical in our ability to
        reach people."
        image="/assets/images/stories/newyork/ny_people_daphne_lundi.jpeg"
        authorName="Daphne Lundi"
        authorPosition="Deputy Director of Social Resikience"
        authorCompany="New York City Mayor´s Office"
      />
    </div>
  );
};

const Section17 = () => {
  return (
    <div className={cx(styles.bgPrimary, styles.quoteContainer)}>
      <Quote
        text="We need to invest in programs like Be A Buddy which are
        preemptive. They serve to prepare people and identify the root
        causes of problems, rather than wait until after the damage is done."
        image="/assets/images/stories/newyork/ny_people_danny_peralta.jpg"
        authorName="Danny Peralta"
        authorPosition="Managing Director"
        authorCompany="The Point"
      />
    </div>
  );
};

const NewYork = () => {
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
      <Section11 />
      <Section15 />
      <Section17 />
    </div>
  );
};

export default NewYork;
