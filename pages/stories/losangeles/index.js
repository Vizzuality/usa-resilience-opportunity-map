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
            <span className={styles.underline}>Cool roofs</span>
            <br />
            for cool streets
          </span>
        </div>
        <div className={styles.section1Text}>
          <p>
            Researchers predict that heat waves will become 2 to 10 times more
            frequent across California by 2050.
          </p>
          <p>
            Los Angeles&apos;s (LA County) formerly redlined neighborhoods are
            most impacted by extreme heat. These neighborhoods often have
            freeways built over or through them, are near ports with high levels
            of impermeable surfaces, and lack tree cover. The combination of
            heat and pollution leads to high levels of asthma and other
            respiratory conditions. Low-income households can also struggle to
            meet the energy costs of running air-conditioning, further
            exacerbating heat issues.
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
    <div className={cx(styles.section3, styles.bgGray)}>
      <div>
        <div className={cx(styles.col, styles.colLeft)} />
        <div className={cx(styles.col, styles.colRight, styles.textWhite)}>
          <p>
            However, if cool, reflective, roofs were adopted throughout the
            state’s most populous areas – including Los Angeles – heat wave
            exposures (defined as each time a person experiences a heat wave)
            could be brought down by 35 million each year.
          </p>
          <p>
            Without this proactive approach, Los Angeles could see an estimated
            80 million heat wave cases in 2050.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section4 = () => {
  return (
    <div className={cx(styles.bgSecondary, styles.quoteContainer)}>
      <Quote
        text="Overnight is when the human body is typically supposed to reset 
        and cool down. But if temperatures don’t go down, then there are more 
        health repercussions. Some of our communities, especially those near 
        concrete, heavy infrastructure locations, are not cooling down overnight, 
        and that's when you really have dangerous human impacts."
        image="/assets/images/stories/losangeles/la_people_kristen_pawling.jpg"
        authorName="Kristen Torres Pawling"
        authorPosition="Director"
        authorCompany="Los Angeles County Sustainability Office"
      />
    </div>
  );
};

const Section8 = () => {
  return (
    <div className={cx(styles.bgPrimary, styles.quoteContainer)}>
      <Quote
        text="Climate Resolve promoted the policy. We are the technical experts
        helping lead the way in partnership with the local government. When it 
        comes to the cool roofs, we had a very willing partner in city and county 
        government who we were able to partner with and introduce new ideas to. 
        Working together helped make this policy change happen."
        image="/assets/images/stories/losangeles/la_people_jonathan_parfrey.png"
        authorName="Jonathan Parfrey"
        authorPosition="Executive Director"
        authorCompany="Climate Resolve"
      />
    </div>
  );
};

const Section12 = () => {
  return (
    <div className={cx(styles.bgPrimary, styles.quoteContainer)}>
      <Quote
        text="The status quo is maladaptive. What we are doing today 
        isn't helping us with climate change in the future. If we are 
        building streets with dark asphalt today, that condemns us to 
        decades of further warming. We need to stop digging the hole and 
        that means not using the materials that make things worse."
        image="/assets/images/stories/losangeles/la_people_jonathan_parfrey.png"
        authorName="Jonathan Parfrey"
        authorPosition="Executive Director"
        authorCompany="Climate Resolve"
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
      <Section8 />
      <Section12 />
    </div>
  );
};

export default LosAngeles;
