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
          <p>
            The city has one of the largest sea-level rises in the country –
            half a foot since 1992. That’s twice the global average. The climate
            crisis, sinking land, and changing ocean currents all play their
            part in increasing Norfolk’s vulnerability.
          </p>
          <p className={cx(styles.textSecondary)}>
            {' '}
            The impacts of floods in Norfolk include:
          </p>
          <ul>
            <li className={cx(styles.listItem)}>
              Property damage to homes and cars.
            </li>
            <li className={cx(styles.listItem)}>
              Disruption of transport infrastructure.
            </li>
            <li className={cx(styles.listItem)}>
              Road flooding, cutting off vulnerable communities from the city.
            </li>
            <li className={cx(styles.listItem)}>
              Disrupted education due to safety concerns for children, which has
              long term social and economic consequences.
            </li>
            <li className={cx(styles.listItem)}>
              Heightened stress and anxiety.
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

const Section6 = () => {
  return (
    <div className={cx(styles.section6, styles.bgLightBlue, styles.textGray)}>
      <div className={styles.container}>
        <div className={styles.contentLeft}>
          <p>
            Before planning the resilience initiatives, Norfolk’s Resilience
            Office, Planning Department, and Housing and Community Development
            organized the Dutch Virginia Dialogue. The Dialogue brought in
            experts from the Netherlands to discuss how best to manage coastal
            flooding – a climate change impact the Netherlands is familiar with
            due to its geography.
          </p>
          <p>
            Following the 2013 Dialogue, Norfolk set out a plan to test various
            resilience solutions to tackle coastal flooding as part of a wider
            Norfolk 2100 vision.
          </p>
          <p className={cx(styles.textPrimary, styles.bold)}>These include:</p>
          <ul>
            <li className={cx(styles.listItem)}>Flood.</li>
            <li className={cx(styles.listItem)}>Tide gates.</li>
            <li className={cx(styles.listItem)}>Pumps.</li>
            <li className={cx(styles.listItem)}>Community education.</li>
            <li className={cx(styles.listItem)}>
              Building and development ordinances.
            </li>
            <li className={cx(styles.listItem)}>
              Rainwater retention initiatives.
            </li>
            <li className={cx(styles.listItem)}>
              &quot;Resilience parks &quot; green spaces with climate resilient
              infrastructure.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Section7 = () => {
  return (
    <div className={cx(styles.section10, styles.bgGray, styles.textWhite)}>
      <div>
        <div className={cx(styles.col, styles.colLeft)} />
        <div className={cx(styles.col, styles.colRight)}>
          <h5 className={cx(styles.sectionTitle)}>
            Ohio Creek Watershed Project
          </h5>
          <p>
            Central to the flood resilience solutions is the Ohio Creek
            Watershed, a project funded by a $112 million grant from the
            National Disaster Competition awarded to the city after Hurricane
            Sandy.
          </p>
          <p className={cx(styles.textSecondary)}>
            The project integrates a range of interventions, including:
          </p>
          <ul>
            <li className={cx(styles.listItem)}>
              A resilience park with native plants to absorb stormwater and
              underground pipes that collect and pump out stormwater.
            </li>
            <li className={cx(styles.listItem)}>
              Two stormwater pump stations to pump rainfall to the Elizabeth
              River.
            </li>
            <li className={cx(styles.listItem)}>
              Elevating roads to prevent future flooding.
            </li>
            <li className={cx(styles.listItem)}>
              Construction of a berm and rock jetty.
            </li>
            <li className={cx(styles.listItem)}>
              Construction of flood and tidal gates.
            </li>
            <li className={cx(styles.listItem)}>
              A living shoreline and wetlands that absorb water and increase
              biodiversity
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Section8 = () => {
  return (
    <div className={cx(styles.section8, styles.bgWhite, styles.textGray)}>
      <div className={styles.contentRight}>
        <img
          src="/assets/images/stories/norfolk/nf_section_8_bg.png"
          className={styles.section10Img}
          alt=""
        />
      </div>
      <div className={styles.container}>
        <div className={styles.contentLeft}>
          <p>
            The resilience park design has been created with community
            consultation across 13 different meetings over a period of two
            years. It includes basketball courts, a children’s play area and a
            fishing pier.
          </p>
          <p>
            The berm is a sea wall that protects the community from coastal
            flooding. It will be a total of 11 feet tall to meet the worst-case
            scenario of a 100-year coastal storm and a simultaneous 10-year rain
            event. By 2065, when sea levels are expected to rise by 2.5 feet,
            the berm will still effectively hold back floods and protect the
            community.
          </p>
          <p>
            The entire project is borne from collaboration with local
            universities to design the best flood resilience strategies, private
            contractors to build the resilience features, city government
            partners to integrate the solutions with housing and parks, and
            local NGOs and the community to ensure the park, in particular, is
            designed around local people’s needs.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section9 = () => {
  return (
    <div className={cx(styles.bgSecondary, styles.quoteContainer)}>
      <Quote
        text="Coastal flooding is a long-term issue and we need to design
        for the future."
        image="/assets/images/stories/norfolk/nf_people_douglas_beaver.jpg"
        authorName="Doug Beaver"
        authorPosition="Chief Resilience officer"
        authorCompany="City of Norfolk"
      />
    </div>
  );
};

const Section10 = () => {
  return (
    <div className={cx(styles.section10, styles.bgWhite, styles.textGray)}>
      <div>
        <div className={cx(styles.col, styles.colLeft)} />
        <div className={cx(styles.col, styles.colRight)}>
          <h5 className={cx(styles.sectionTitle)}>Tidewater Gardens</h5>
          <p>
            The Tidewater Gardens public housing complex in St. Pauls is home to
            3,200 residents, half of which are children. The neighborhood is
            built on a low-lying area, making it vulnerable to floods. Alongside
            it is 26 acres of unused land that will become a resilience park to
            mitigate flood risk while improving community health and wellbeing.
          </p>
          <p>
            The project is funded by a $12 million grant from the Department of
            Housing and Urban Development, as part of a $30 million investment
            to transform the St. Paul’s area.
          </p>
          <p>
            To start, the Department of Housing and Community studied the Land’s
            hydrology, revealing an old creek bed that could be daylighted to
            hold water and slow down floodwaters.
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
        text="We’re creating a beautiful landscape neighborhood that will
        connect communities, while addressing issues that arise out of the
        flood plain."
        image="/assets/images/stories/norfolk/nf_people_susan_perry.jpg"
        authorName="Susan Perry"
        authorPosition="Director Department of housing and community"
        authorCompany="City of Norfolk"
      />
    </div>
  );
};

const Section12 = () => {
  return (
    <div className={cx(styles.section12, styles.bgLightBlue, styles.textGray)}>
      <div className={styles.container}>
        <div className={styles.contentRight}>
          <img
            src="/assets/images/stories/norfolk/nf_section_12_bg.png"
            className={styles.section12Img}
            alt=""
          />
        </div>
        <div className={styles.contentLeft}>
          <p>
            The Department worked with private consultants and a coalition of
            engineers, landscape gardeners, the Department of Works, and the
            Resilience Office to decide on the following flood-mitigation
            measures:
          </p>
          <ul>
            <li className={cx(styles.listItem)}>
              Daylight the creek bed, creating a waterway through the park.
            </li>
            <li className={cx(styles.listItem)}>
              Construction of retention ponds and bioswales.
            </li>
            <li className={cx(styles.listItem)}>
              Planting of native trees and shrubs to absorb flood water.
            </li>
          </ul>
          <p>
            The Department rallied residents around the program through public
            meetings, leafleting, online surveys, door-knocking, a website and
            socially-distanced meetings, as well as engagement with the tenant
            management council.
          </p>
          <p>
            These conversations helped ensure the park development would match
            the residents’ needs by including fitness and meditation spaces, a
            cultural history trail, and an amphitheater.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section13 = () => {
  return (
    <div className={cx(styles.bgWhite, styles.textGray, styles.section13)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.section13Aside)}>
          &quot;You can never communicate enough – so always over-communicate.
          Make sure you’re working with folks from all levels, from residents to
          elected officials.&quot;
          <div className={cx(styles.quoteAuthor)}>
            <div className={cx(styles.quoteImage)}>
              <img
                src="/assets/images/stories/norfolk/nf_people_susan_perry.jpg"
                alt="Susan Perry"
              />
            </div>
            <div className={cx(styles.quoteInfo)}>
              <div className={styles.quoteAuthorName}>Susan Perry</div>
              <div className={styles.quoteAuthorPosition}>
                Director Department of housing and community
              </div>
              <div className={styles.quoteAuthorCompany}>City of Norfolk</div>
            </div>
          </div>
        </div>
        <div className={cx(styles.section13Wrapper)}>
          <h5 className={cx(styles.sectionTitle)}>
            Communication and Collaboration
          </h5>
          <p>
            In both Tidewater Gardens and the wider Ohio Creek Watershed
            project, the city government worked collaboratively with public and
            private entities to innovate and develop solutions that meet the
            city’s needs.
          </p>
          <p>
            Central to all efforts is communication with the community, from
            involving them in the planning phase through public meetings and
            surveys to keeping them informed on progress with meetings, postal
            newsletters, and videos online.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section14 = () => {
  return (
    <div className={cx(styles.bgGray, styles.quoteContainer)}>
      <Quote
        text="We’ve been successful because we have had buy-in from the
        community from the start. You have to think innovatively and then
        you have to engage the community at the forefront."
        image="/assets/images/stories/norfolk/nf_people_douglas_beaver.jpg"
        authorName="Doug Beaver"
        authorPosition="Chief Resilience officer"
        authorCompany="City of Norfolk"
      />
    </div>
  );
};

const Norfolk = () => {
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
    </div>
  );
};

export default Norfolk;
