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

const Section5 = () => {
  return (
    <div className={cx(styles.section5, styles.bgWhite, styles.textGray)}>
      <div className={styles.contentRight}>
        <img
          src="/assets/images/stories/losangeles/la_section_5_bg.png"
          className={styles.section5Img}
          alt=""
        />
      </div>
      <div className={styles.container}>
        <div className={styles.contentLeft}>
          <h5 className={cx(styles.sectionTitle)}>Changing the Law</h5>
          <p className={styles.paragraph}>
            Global climate modeling completed by teams at the University of
            California shows that, no matter what, extreme heat is set to rise
            in Los Angeles. How much it will rise depends on what strategies the
            region can immediately take to mitigate its impact.
          </p>
          <p className={styles.paragraph}>
            Los Angeles County recognized that the impact of climate change and
            extreme heat could not be the responsibility of a single office. In
            response, the Public Health Department, Chief Security Officer,
            Building and Safety Department, Animal Care and Control Department,
            and the Sustainability Office worked as a coalition to devise
            solutions to the growing threat of extreme heat.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section6 = () => {
  return (
    <div className={cx(styles.section6, styles.bgLightBlue, styles.textGray)}>
      <div className={styles.contentLeft}>
        <img
          src="/assets/images/stories/losangeles/la_section_6_bg.png"
          className={styles.section6Img}
          alt=""
        />
      </div>
      <div className={cx(styles.contentRight, styles.container)}>
        <p>
          They focused on reducing heat-trapping surfaces by passing an
          ordinance mandating that all new buildings in Los Angeles must be
          built using cool roof technologies to reflect solar radiation.
        </p>
        <p>
          Supporting the project was Climate Resolve, a local NGO working on
          resilient solutions to the climate crisis. Climate Resolve promoted
          the Cool Roofs Ordinance to “willing partners” in local government.
          They recommended materials that would effectively reflect radiation,
          worked with manufacturers to help them understand what materials to
          use and assist policymakers to draft the legislation.
        </p>
      </div>
    </div>
  );
};

const Section7 = () => {
  return (
    <div className={cx(styles.section7, styles.bgWhite)}>
      <div>
        <div className={cx(styles.col, styles.colLeft)} />
        <div className={cx(styles.col, styles.colRight, styles.textGray)}>
          <p>
            As with all laws, a legal process was followed to implement the Cool
            Roofs Ordinance. Firstly, a research study proved the effectiveness
            of the new law. Then the law was drafted by civil servants in the
            Sustainability Office with support from Climate Resolve. It was
            finally approved in 2018 by the Mayor who signed it into the
            building codes.
          </p>
          <p>
            The ordinance amended the Green Buildings Standard code to turn a
            voluntary requirement on cool roof technology into a mandatory one –
            guaranteeing that in the years and decades to come, all new
            buildings and updated buildings in Los Angeles will use cool roof
            technology to tackle extreme heat.
          </p>
          <p>
            In its final draft, the Cool Roofs Ordinance “requires utilization
            of cool roofing for new building constructions, building additions,
            and major roof replacements in the unincorporated areas of Los
            Angeles County.”
          </p>
          <p>
            It confirmed the levels of solar reflectiveness and thermal
            emittance that all roofing materials should have to be compliant
            with the law.
          </p>
        </div>
      </div>
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

const Section9 = () => {
  return (
    <div className={cx(styles.section9, styles.bgLightBlue, styles.textGray)}>
      <div className={styles.container}>
        <div className={styles.contentRight}>
          <img
            src="/assets/images/stories/losangeles/la_section_9_bg.png"
            className={styles.section9Img}
            alt=""
          />
        </div>
        <div className={styles.contentLeft}>
          <h5 className={cx(styles.sectionTitle)}>Advocating for Change</h5>
          <p>
            The Building and Safety Department worked with the construction
            industry to explain the new regulations. The department had
            individual conversations with builders and manufacturers to discuss
            the ordinance, why it was needed, and how to source the materials
            required.
          </p>
          <p>
            Going forward, the Building and Safety Department is responsible for
            enforcing the ordinance and ensuring that all new construction work
            is completed with cool roof technology.
          </p>
          <p>
            Promoting the new law is also the responsibility of roofing
            suppliers. Cool roofing materials can be bought by individual
            homeowners when renovating their own homes, including from local
            stores. Homeowners can also have a choice about how their new cool
            roofs would look since 22 different types of roofing meet the
            ordinance’s requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section10 = () => {
  return (
    <div className={cx(styles.section10, styles.textWhite, styles.bgPrimary)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.section10Wrapper)}>
          <h5 className={cx(styles.sectionTitle)}>The Housing Crisis</h5>
          <p>
            There are numerous co-benefits to the Cool Roofs Ordinance.
            Crucially, it can help Los Angeles address its ongoing housing
            crisis.
          </p>
          <p>
            The new ordinance insists that any new public housing projects
            planned by the local government will be built with cool roofs. Grant
            money for public housing comes from federal funds – and it is easier
            to secure this funding when the city can prove its projects are
            climate resilient.
          </p>
          <p>
            The Cool Roof Ordinance has helped Los Angeles win funding for
            housing from the Greenhouse Gas Reduction Fund pool as well as the
            Affordable Housing and Sustainable Communities Program, enabling the
            county to build more homes and protect residents from extreme heat.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section11 = () => {
  return (
    <div className={cx(styles.section11, styles.textGray, styles.bgWhite)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.section11Wrapper)}>
          <h5 className={cx(styles.sectionTitle)}>Cool Streets</h5>
          <p>
            Climate Resolve is now working with the local government to expand
            cool roof technology to the streets.
          </p>
          <p>
            It is piloting a variety of technologies – such as applying a thin
            layer of titanium dioxide to asphalt surfaces to reflect up to 60%
            of the sun&apos;s radiation – to determine which interventions work
            best to make Los Angeles streets cooler and safer, with minimal
            disruptions to the city&apos;s inhabitants.
          </p>
          <p>
            Climate Resolve even hopes to bring cool technology to playgrounds
            and schools.
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
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
      <MetaFooter exploreLink="/explore?id=224804" />
    </div>
  );
};

export default LosAngeles;
