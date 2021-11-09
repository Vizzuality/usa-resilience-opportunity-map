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
            <span className={styles.underline}>Cool Roofs</span>
            {' '}
            for
            <br />
            Cool Streets
          </span>
        </div>
        <div className={styles.section1Text}>
          <p>
            Researchers predict that heat waves will become two to ten times
            more frequent across California by 2050. 
            {' '}
            <sup>1</sup>
          </p>
          <p>
            Los Angeles&apos;s (LA County) formerly redlined neighborhoods are
            most impacted by extreme heat. These neighborhoods often have
            freeways built over or through them, are near ports with high levels
            of impermeable surfaces, and lack tree cover. The combination of
            heat and pollution leads to high levels of asthma and other
            respiratory conditions. Low-income households can also struggle to
            meet the energy costs of running air conditioning, further
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
      <VideoPlayer
        thumbnail="/assets/images/stories/losangeles/la_video_thumb.png"
        url="https://www.youtube.com/watch?v=aYTUyxrANmM&ab_channel=AtlanticCouncil"
      />
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
            If cool, reflective roofs were adopted throughout the state’s most
            populous areas—including Los Angeles—heat-wave exposures (defined as
            each time a person experiences a heat wave) could be brought down by
            thirty-five million each year.
          </p>
          <p>
            Without this proactive approach, Los Angeles could see an estimated
            eighty million heat-wave cases in 2050.
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
        text="Overnight is when the human body is typically supposed to reset and cool down. But, if temperatures don’t go down, then there are more health repercussions. Some of our communities, especially those near concrete, heavy infrastructure locations, are not cooling down overnight, and that's when you really have dangerous human impacts."
        image="/assets/images/stories/losangeles/la_people_kristen_pawling.jpg"
        authorName="Kristen Torres-Pawling"
        authorPosition="SUSTAINABILITY PROGRAM DIRECTOR"
        authorCompany="County of Los Angeles"
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
            California, Los Angeles (UCLA) shows that, no matter what, extreme
            heat is set to rise in Los Angeles.2 How much it will rise depends
            on what strategies the region can immediately take to mitigate its
            impact.
          </p>
          <p className={styles.paragraph}>
            Los Angeles County recognized that the impact of climate change and
            extreme heat could not be the responsibility of a single office. In
            response, the Public Health Department, chief security officer,
            Building and Safety Department, and the Sustainability Office worked
            as a coalition to devise solutions to the growing threat of extreme
            heat.
            <sup>2</sup>
          </p>
          <p>
            They focused on reducing heat-trapping surfaces by passing an
            ordinance mandating that all new buildings in Los Angeles must be
            built using cool-roof technologies to reflect solar radiation.
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
          Supporting the project was Climate Resolve, a local nongovernmental
          organization (NGO) working on resilient solutions to the climate
          crisis. Climate Resolve promoted the Cool Roofs Ordinance to willing
          partners in local government. It recommended materials that would
          effectively reflect radiation, worked with manufacturers to help them
          understand what materials to use, and assisted policymakers to draft
          the legislation.
        </p>
        <p>
          As with all laws, a legal process was followed to implement the Cool
          Roofs Ordinance. First, a research study proved the effectiveness of
          the new law. Then, the law was drafted by civil servants with support
          from Climate Resolve. The County Board of Supervisors adopted the
          ordinance in 2018, which established the most aggressive cool roofs
          requirement in the nation.
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
            The County Board of Supervisors adopted the ordinance in 2018, which
            established the most aggressive cool roofs requirement in the
            nation.
          </p>
          <p>
            The ordinance amended the Green Buildings Standard code to turn a
            voluntary requirement on cool-roof technology into a mandatory
            one—guaranteeing that, in the years and decades to come, all new
            buildings and updated buildings in Los Angeles will use cool-roof
            technology to tackle extreme heat.
          </p>
          <p>
            In its final draft, the Cool Roofs Ordinance “requires utilization
            of cool roofing for new building constructions, building additions,
            and major roof replacements in the unincorporated areas of Los
            Angeles County.
            <sup>3</sup>
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
        text="Climate Resolve promoted the policy. We are the technical experts helping lead the way in partnership with the local government. When it comes to the cool roofs, we had a very willing partner in the city and county government who we were able to partner with and introduce new ideas to. Working together helped make this policy change happen."
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
            is completed with cool-roof technology.
          </p>
          <p>
            Promoting the new law is also the responsibility of roofing
            suppliers. Cool-roofing materials can be bought by individual
            homeowners when renovating their own homes, including from local
            stores. Homeowners can also have a choice about how their new cool
            roofs look because twenty-two different types of roofing meet the
            ordinance’s requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section10 = () => {
  return (
    <div className={cx(styles.section10, styles.textWhite, styles.bgSecondary)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.section10Wrapper)}>
          <h5 className={cx(styles.sectionTitle)}>The Housing Crisis</h5>
          <p>
            There are numerous co-benefits to the Cool Roofs Ordinance.
            Crucially, it can help Los Angeles address its ongoing housing
            crisis.
          </p>
          <p>
            The new ordinance insists that any new public-housing projects
            planned by the local government will be built with cool roofs. Grant
            money for public housing comes from state funds—and it is easier to
            secure this funding when the city can prove its projects are climate
            resilient.
          </p>
          <p>
            The Cool Roof Ordinance has helped Los Angeles win funding for
            housing from the Affordable Housing and Sustainable Communities
            Program, enabling the county to build more homes and protect
            residents from extreme heat.
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
            cool-roof technology to the streets.
          </p>
          <p>
            It is piloting a variety of technologies—such as applying a thin
            layer of titanium dioxide to asphalt surfaces to reflect up to 60
            percent of the sun&apos;s radiation—to determine which interventions
            work best to make Los Angeles streets cooler and safer, with minimal
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
        text="The status quo is maladaptive. What we are doing today isn’t helping us with climate change in the future. If we are building streets with dark asphalt today, that condemns us to decades of further warming. We need to stop digging the hole and that means not using the materials that make things worse."
        image="/assets/images/stories/losangeles/la_people_jonathan_parfrey.png"
        authorName="Jonathan Parfrey"
        authorPosition="Executive Director"
        authorCompany="Climate Resolve"
      />
    </div>
  );
};

const Section13 = () => {
  return (
    <div
      className={cx(
        styles.bgPrimary,
        styles.textWhite,
        styles.footerPageContainer
      )}
    >
      <div>
        <p>
          1 Priyanka Runwal, “Cool Roofs Can Help Shield California’s Cities
          Against Heat Waves,” Berkeley Lab, press release, August 14, 2019,
          <a href="https://newscenter.lbl.gov/2019/08/14/cool-roofs-can-help-shield-californias-cities-against-heat-waves">
            https://newscenter.lbl.gov/2019/08/14/cool-roofs-can-help-shield-californias-cities-against-heat-waves/.
          </a>
        </p>
        <p>
          2 “Climate Change in the Los Angeles Region,” UCLA Institute of the
          Environment and Sustainability, 2015,
          <a href="https://www.ioes.ucla.edu/project/climate-change-in-the-los-angeles-region">
            https://www.ioes.ucla.edu/project/climate-change-in-the-los-angeles-region/.
          </a>
        </p>
        <p>
          3 “Development Services Core Service Area Proposed Amendments to the
          2017 Los Angeles County Green Buildings Standard Code,” City of Los
          Angeles Department of Public Works, October 16, 2018,
          <a href="http://file.lacounty.gov/SDSInter/bos/supdocs/128102.pdf">
            http://file.lacounty.gov/SDSInter/bos/supdocs/128102.pdf.
          </a>
        </p>
      </div>
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
      <Section13 />
      <MetaFooter exploreLink="/explore?id=224804" />
    </div>
  );
};

export default LosAngeles;
