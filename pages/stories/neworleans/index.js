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
            Turning a mixed-income neighborhood into a model solution for
            {' '}
            <span className={styles.underlineRed}>stormwater</span>
            {' '}
            flooding
          </span>
        </div>
        <div className={styles.section1Text}>
          <p>
            Living with water, and the challenges it brings, is not unfamiliar
            to the 31,000 people living in New Orleans’ first ever resilience
            district in Gentilly.
          </p>
          <p>
            Much of the city lies below sea-level, making it especially
            vulnerable to stormwater flooding resulting from extreme
            precipitation caused by cyclones and hurricanes.
          </p>
        </div>
      </div>
      <div className={styles.section1Image}>
        <img
          src="/assets/images/stories/neworleans/no_section_1_image.png"
          alt=""
        />
      </div>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className={styles.section2}>
      <VideoPlayer url="https://www.youtube.com/watch?v=visUyBdV6DQ&ab_channel=AtlanticCouncil" />
    </div>
  );
};

const Section3 = () => {
  return (
    <div className={styles.section3}>
      <div>
        <div className={cx(styles.col, styles.colLeft)}>
          <p>
            Much of the city lies below sea-level, making it especially
            vulnerable to stormwater flooding resulting from extreme
            precipitation caused by cyclones and hurricanes.
          </p>
          <p>
            Since Hurricane Katrina in 2004, which destroyed 850,000 homes and
            killed 1833 people, the city has endured 24 hurricanes and tropical
            storms, costing $135 billion in damage.
          </p>
          <p>
            In Gentilly itself, the population is now approximately ninety
            percent of what it was in 2000, having lost people following the
            flooding caused by Katrina.
          </p>
          <p>
            Stormwater flooding is one of the most visible impacts of the
            climate emergency on US cities. Repairing and replacing
            flood-damaged roads, bridges, utilities, and other public
            infrastructure cost FEMA an estimated $48.6 billion between 1998 and
            2014.
          </p>
        </div>
        <div className={cx(styles.col, styles.colRight)}>
          <img
            src="/assets/images/stories/neworleans/no_section_3_image_1.png"
            className={styles.section3Img1}
            alt=""
          />
          <img
            src="/assets/images/stories/neworleans/no_section_3_image_2.png"
            className={styles.section3Img2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const Section4 = () => {
  return (
    <div className={cx(styles.textGray, styles.bgWhite, styles.section4)}>
      <div className={styles.container}>
        <div className={cx(styles.cols, styles.cols2)}>
          <div className={cx(styles.col, styles.colLeft)}>
            <p>
              With stormwater flooding posing a growing risk, New Orleans
              residents are asking “what can I do to protect my home, my family,
              my yard?”
            </p>
          </div>
          <div className={cx(styles.col, styles.colRight)}>
            <p>
              That desire for self-empowerment informed plans for the Gentilly
              Resilience District – including the Community Adaptation Program
              that offers a model for US cities on how to collaborate with
              homeowners to manage stormwater flooding.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.section4Bg}>
        <img
          className={styles.section4Img1}
          src="/assets/images/stories/neworleans/no_section_4_image_1.png"
          alt=""
        />
        <img
          className={styles.section4Img2}
          src="/assets/images/stories/neworleans/no_section_4_image_2.png"
          alt=""
        />
      </div>
    </div>
  );
};

const Section5 = () => {
  return (
    <div className={cx(styles.bgPrimary, styles.section5)}>
      <Quote
        text="I always think in the context of: what would happen if every citizen or parcel in New Orleans had some sort of stormwater management on their property? Imagine what would happen if we did that."
        image="/assets/images/stories/neworleans/no_people_brenda_breaux.jpg"
        authorName="Brenda Breaux"
        authorPosition="Executive Director"
        authorCompany="New Orleans Redevelopment Authority (NOLA)"
      />
    </div>
  );
};

const Section6 = () => {
  return (
    <div className={styles.section6}>
      <div>
        <div className={cx(styles.col, styles.colLeft)} />
        <div
          className={cx(
            styles.col,
            styles.colRight,
            styles.textGray,
            styles.bgWhite
          )}
        >
          <p className={cx(styles.bold, styles.fontUbuntu)}>
            “Everyone is concerned by the threat of rainfall”
          </p>
          <p>
            The City of New Orleans, including the New Orleans Redevelopment
            Authority as an implementation partner, applied for and won an U.S.
            Department of Housing and Urban Development National Disaster
            Resilience Competition Grant worth $141.3 million from the U.S.
            Department of Housing to help tackle stormwater flooding in the
            city.
          </p>
          <p>
            The grant was offered to the city to build more resiliency following
            Hurricane Isaac. Its purpose was to fund a program that would allow
            New Orleans to withstand future disasters and address ongoing
            ‘stresses’ such as poverty, homelessness, and public health
            disparities.
          </p>
          <p>
            In New Orleans, high levels of crime and inequality make these
            stresses more extreme, and make much of the population less capable
            to prepare, respond, and recover from the shocks they face.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section7 = () => {
  return (
    <div className={cx(styles.section7, styles.textWhite, styles.bgSecondary)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.section7Wrapper)}>
          <p className={cx(styles.bold, styles.fontUbuntu)}>
            Community Collaboration to Win Funding
          </p>
          <p>
            When applying for the grant, the City of New Orleans consulted with
            residents to understand the challenges caused by stormwater
            flooding, which they did via public meetings.
          </p>
          <p>
            Residents shared the risks posed by extreme precipitation in the
            event of tropical storms and cyclones, and the day-to-day
            difficulties of micro-flooding and heavy rainfall.
          </p>
          <p>
            Risks identified included personal vehicles damaged by being
            inundated with stormwater; lack of access to personal property
            including waterlogged yards; building subsidence; power losses; and
            levee breaches causing flooding.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section8 = () => {
  return (
    <div className={cx(styles.section8, styles.textGray, styles.bgWhite)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.section8Wrapper)}>
          <p className={cx(styles.bold, styles.fontUbuntu)}>
            Stormwater Management in your own yard
          </p>
          <p>
            The Gentilly Resilience District program was designed to adapt not
            only publicly owned property and infrastructure, but also private
            property in order to build equity, reduce risk of stormwater
            flooding, and adapt the city to its natural environment. The program
            was developed through a collaborative partnership including the City
            of New Orleans, New Orleans Redevelopment Authority, Sewerage and
            Water Board of New Orleans, Deltares, The Trust for Public Land and
            Waggoner & Ball Architects.
          </p>
          <p>
            The coalition identified Gentilly as its resilience district due to
            its risk of flooding, and its diverse ethnic and socio-economic
            population. Three-quarters of residents are African-American.
          </p>
          <p>
            Using a $5.9 million budget, the New Orleans Redevelopment Authority
            identified model interventions to determine the right scale of
            investment needed to address the challenges identified by
            homeowners. This process revealed the need for a bigger set of
            interventions than initially anticipated, usually developed around a
            central investment in driveway replacement at each home.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section9 = () => {
  return (
    <div className={cx(styles.section9, styles.bgGray, styles.textWhite)}>
      <div className={styles.container}>
        <div className={styles.contentRight}>
          <img
            src="/assets/images/stories/neworleans/no_section_9_image.png"
            className={styles.section9Img}
            alt=""
          />
        </div>
        <div className={styles.contentLeft}>
          <p>The Community Adaptation Program interventions included:</p>
          <ul className={styles.section9List}>
            <li>
              <span className={cx(styles.textPrimary, styles.bold)}>
                Impermeable surface demolition
              </span>
              {' '}
              – removal of concrete slabs and other impermeable surfaces that
              prevent water from infiltrating naturally into the earth and cause
              stormwater to run off of the property into the street where it
              needs to be pumped out
            </li>
            <li>
              <span className={cx(styles.textPrimary, styles.bold)}>
                Permeable pavements
              </span>
              {' '}
              – replacing concrete driveways, sidewalks, and patios with
              materials such as concrete block pavers that have open joints
              filled with limestone or rock chips. This allows floodwaters to
              penetrate and be stored beneath the surface instead of running off
              the property.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Section10 = () => {
  return (
    <div className={cx(styles.section10, styles.bgGray, styles.textWhite)}>
      <div className={styles.container}>
        <div className={styles.contentRight}>
          <ul className={styles.section10List}>
            <li>
              <span className={cx(styles.textPrimary, styles.bold)}>
                Tree planting, planter boxes and rain gardens
              </span>
              {' '}
              – planting native plants in people’s gardens reduces flooding
              risks as the plants soak up the water into their roots
            </li>
            <li>
              <span className={cx(styles.textPrimary, styles.bold)}>
                Rain barrels
              </span>
              {' '}
              – collecting rain water not only reduces flood risk, but that same
              water can be used to care for plants
            </li>
            <li>
              <span className={cx(styles.textPrimary, styles.bold)}>
                French drains
              </span>
              {' '}
              – an infiltration trench dug into people’s yards and filled with
              aggregate that directs subsoil and water away from their property
            </li>
          </ul>
        </div>
        <div className={styles.contentLeft}>
          <img
            src="/assets/images/stories/neworleans/no_section_10_image_1.png"
            className={styles.section10Img1}
            alt=""
          />
          <img
            src="/assets/images/stories/neworleans/no_section_10_image_2.png"
            className={styles.section10Img2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const Section11 = () => {
  return (
    <div className={cx(styles.section11, styles.bgWhite)}>
      <div className={styles.section11Wrapper}>
        <div className={styles.container}>
          <div className={styles.section11Title}>Top tip for your city</div>
          <div className={styles.section11Text}>
            Talk to your community – and empower your residents to get involved.
          </div>
        </div>
      </div>
    </div>
  );
};

const Section12 = () => {
  return (
    <div className={cx(styles.section12, styles.textWhite, styles.bgPrimary)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.section12Wrapper)}>
          <p>
            To qualify for the program, homeowners had to prove they earned
            below 80% of the Area Median Income (AMI) and agree to maintain the
            improvements for a minimum of five years. Participants in the
            program participate in the design of interventions on their property
            in consultation with a licensed landscape architect with expertise
            in stormwater management practices.
          </p>
          <p>
            Grant funds would then cover up to $25,000 of the design and
            construction costs of the interventions per household.
          </p>
          <p>
            The New Orleans Redevelopment Authority built upon the community
            work that had begun in the grant writing process by arranging public
            meetings, neighborhood association meetings and a media campaign to
            promote participation.
          </p>
          <p>
            The grant will provide funding for approximately 200 home
            adaptations. Incredibly, more than 600 households have expressed
            interest so far and, thanks to more than 100 successful
            installations so far and positive word-of-mouth, more people are
            inquiring about how to join the project.
          </p>
        </div>
        <div className={cx(styles.section12Aside)}>
          Incredibly, more than 600 households have expressed interest so far
          and more people are inquiring about how to join the project.
        </div>
      </div>
    </div>
  );
};

const Section13 = () => {
  return (
    <div className={cx(styles.section13, styles.textGray, styles.bgWhite)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.section13Wrapper)}>
          <p className={cx(styles.bold, styles.fontUbuntu)}>
            A million gallons of captured stormwater whenever it rains
          </p>
          <p>
            The New Orleans Redevelopment Authority is primarily measuring the
            success of the program against two key metrics.
          </p>
          <p>The first is homeowner education.</p>
          <p>
            Homeowners are asked to complete a survey before and after the
            design and construction process to see if the program has helped
            improve their understanding of green infrastructure. The results
            show a majority of homeowners have substantially increased their
            understanding – proving that the Gentilly Resilience District is
            engaging residents in green issues. These program participants are
            then, in turn, educating their neighbors.
          </p>
          <p>
            The second metric is based on increasing stormwater capture
            capacity. Currently each adapted site is averaging 3,500 gallons of
            stormwater capture, meaning when 200 homes are adapted, those sites
            within the Gentilly Resilience District will be capable of capturing
            the first 700,000 gallons of stormwater whenever it rains.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section14 = () => {
  return (
    <div className={cx(styles.section14, styles.textWhite, styles.bgSecondary)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.section14Wrapper)}>
          <p>
            Now the hope is more funding will be made available, either through
            an increased allocation from the city’s National Disaster Resilience
            grant or other sources, increasing participation and allowing the
            project to capture the first 1 million gallons of stormwater
            whenever it rains in Gentilly.
          </p>
          <p>
            Other social and environment impacts from the Gentilly Resilience
            District intervention include:
          </p>
          <ul>
            <li>Increased tree canopy tackling extreme heat</li>
            <li>
              Greater engagement with green issues, promoting generational
              change – with children getting involved in caring for their rain
              gardens and watering plants from the rain barrel
            </li>
            <li>
              An upskilled workforce – the project hired long-term unemployed
              people and formerly incarcerated people, training them in green
              industry jobs and tackling inequality
            </li>
            <li>A greener, healthier community</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Section15 = () => {
  return (
    <div className={cx(styles.bgPrimary, styles.section15)}>
      <Quote
        text="Embrace the opportunity that you might gain from looking at where you can mitigate risks like stormwater flooding. But also, ask yourself – how will you empower your residents to take action to mitigate those same risks. It might be challenging. But this is an opportunity."
        image="/assets/images/stories/neworleans/no_people_brenda_breaux.jpg"
        authorName="Brenda Breaux"
        authorPosition="Executive Director"
        authorCompany="New Orleans Redevelopment Authority (NOLA)"
      />
    </div>
  );
};

const NewOrleans = () => {
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
      <Section14 />
      <Section15 />
      <MetaFooter exploreLink="/explore?id=225748" />
    </div>
  );
};

export default NewOrleans;
