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
        <h1 className={styles.section1Title}>
          <span>
            A Petri Dish for
            <br />
            <span className={styles.underline}>Resilience Solutions</span>
          </span>
        </h1>
        <div className={styles.section1Text}>
          <p>
            As a result of climate change, the US east coast is increasingly at
            risk of coastal flooding, with the number of high-tide days rising
            significantly in more than forty coastal communities. 
            {' '}
            <sup>1</sup>
            {' '}
            By 2050, high-tide flooding in the United States is likely to range
            between 25–75 days a year, compared to a record twenty days in 2020.
            <sup>2</sup>
          </p>
          <p>
            Norfolk, Virginia, has one of the highest rates of relative
            sea-level rise in the country. It has gone up by half a foot since
            1992, which is twice the global average.
            <sup>3</sup>
            {' '}
            At the same time, climate change is also causing an
            increase in the intensity, duration, and frequency of rain events.
            These compounding events all play a part in increasing
            Norfolk&apos;s vulnerability.
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
        thumbnail="/assets/images/stories/norfolk/nf_video_thumb.png"
        url="https://youtu.be/EXqRGH0-xRk"
      />
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
              property damage to homes and cars;
            </li>
            <li className={cx(styles.listItem)}>
              disruption of transport infrastructure;
            </li>
            <li className={cx(styles.listItem)}>
              road flooding, cutting off vulnerable communities from the city;
            </li>
            <li className={cx(styles.listItem)}>
              disrupted education due to safety concerns for children, which has
              long-term social and economic consequences; and
            </li>
            <li className={cx(styles.listItem)}>
              heightened stress and anxiety;
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
            Since 2015, Norfolk&apos;s city government has implemented a range
            of resilience actions through international consultation, private-
            and public-sector collaboration, and community-led engagement to
            tackle its flooding crisis. The city aims to be a hub of
            experimentation and climate innovation. It hopes that by trying a
            range of new ideas, it can invite city leaders across the United
            States to see what works in tackling flooding, and inspire others to
            follow its lead.
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
        text="We’re building big infrastructure and a bigger vision. We’ve talked about Norfolk being a petri dish to come and test resilience solutions. All our projects on flooding are so interconnected. We’re working with people around community and coastal resilience."
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
          <h5 className={cx(styles.sectionTitle)}>
            Two Resilience Parks, Generations of Change
          </h5>
          <p>
            Before planning the resilience initiatives, Norfolk’s Resilience
            Office, Planning Department, and Housing and Community Development
            organized the Dutch Virginia Dialogues. The dialogues brought in
            experts from the Netherlands to discuss how best to manage coastal
            flooding—a climate-change impact the Netherlands is familiar with
            due to its geography.
          </p>
          <p>
            Following the 2013 dialogues, Norfolk set out a plan to test various
            resilience solutions to tackle coastal flooding, as part of a wider
            Norfolk 2100 vision.
          </p>
          <p className={cx(styles.textPrimary, styles.bold)}>
            These solutions include
          </p>
          <ul>
            <li className={cx(styles.listItem)}>flood walls;</li>
            <li className={cx(styles.listItem)}>tide gates;</li>
            <li className={cx(styles.listItem)}>pumps;</li>
            <li className={cx(styles.listItem)}>community education;</li>
            <li className={cx(styles.listItem)}>
              building and development ordinances;
            </li>
            <li className={cx(styles.listItem)}>
              rainwater-retention initiatives; and
            </li>
            <li className={cx(styles.listItem)}>
              “resilience parks,” green spaces with climate- resilient
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
            Central to the flood-resilience solutions is the Ohio Creek
            Watershed, a project funded by a $112-million grant from the
            National Disaster Competition awarded to the city after Hurricane
            Sandy. 
            {' '}
            <sup>4</sup>
          </p>
          <p className={cx(styles.textSecondary, styles.bold)}>
            The project integrates a range of interventions, including:
          </p>
          <ul>
            <li className={cx(styles.listItem)}>
              a resilience park with native plants to absorb stormwater and
              underground pipes that collect and pump out stormwater;
            </li>
            <li className={cx(styles.listItem)}>
              two stormwater pump stations to pump rainfall to the Elizabeth
              River;
            </li>
            <li className={cx(styles.listItem)}>
              elevating roads to prevent future flooding;
            </li>
            <li className={cx(styles.listItem)}>
              construction of a berm and rock jetty;
            </li>
            <li className={cx(styles.listItem)}>
              construction of flood and tidal gates; and
            </li>
            <li className={cx(styles.listItem)}>
              a living shoreline and wetlands that absorb water and increase
              biodiversity.
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
          className={styles.section8Img}
          alt=""
        />
      </div>
      <div className={styles.container}>
        <div className={styles.contentLeft}>
          <p>
            The resilience-park design has been created with community
            consultation across thirteen different meetings over a period of two
            years. It includes basketball courts, a children’s play area, and a
            fishing pier.
          </p>
          <p>
            The berm is a sea wall that protects the community from coastal
            flooding. It will be a total of eleven feet tall to meet the
            worst-case scenario of a hundred-year coastal storm and a
            simultaneous ten-year rain event. By 2065, when sea levels are
            expected to rise by 2.5 feet, the berm will still effectively hold
            back floods and protect the community.
          </p>
          <p>
            The entire project is borne from collaboration with local
            universities to design the best flood-resilience strategies, private
            contractors to build the resilience features, city-government
            partners to integrate the solutions with housing and parks, and
            local nongovernmental organizations (NGOs) and the community to
            ensure the park, in particular, is designed around local people’s
            needs.
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
        text="Coastal flooding is a long-term issue, and we need to design for the future."
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
            he Tidewater Gardens public-housing community in the St. Paul’s area
            of the City is home to 1,600 residents, nine hundred of those
            residents are children. The neighborhood is built on top of a creek
            and in low-lying areas, making it vulnerable to floods. The
            community is being rebuilt, lifting all of the housing out of the
            floodplain and protecting the community from flooding through a
            twenty-six acre resilience park which will mitigate flooding, while
            improving community health and well-being.
          </p>
          <p>
            The project is funded in part by a $30 million grant from the U.S.
            Department of Housing and Urban Development and a $14 million grant
            from the Department of Transportation as part of a $200 million
            investment to transform the Tidewater Gardens neighborhood.
          </p>
          <p>
            To start, the city studied and mapped the historic high ground and
            boundaries of Newton’s Creek and marshes to inform the design of the
            new buildings, roads and the resilience park. The new design
            includes daylighting portions of Newton’s Creek in order to hold
            water and slow down stormwater runoff.
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
        text="We’re creating a beautiful, landscaped neighborhood that will connect communities, while addressing issues that arise from our flooding."
        image="/assets/images/stories/norfolk/nf_people_susan_perry.jpg"
        authorName="Susan Perry"
        authorPosition="Director Department of housing and community development"
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
            engineers, landscape architects, the Department of Public Works
            Stormwater, and the Resilience Office to finalize flood-mitigation
            measures.
          </p>
          <ul>
            <li className={cx(styles.listItem)}>
              daylighting the old creek bed, creating a waterway through the
              park that will hold and store water where it falls;
            </li>
            <li className={cx(styles.listItem)}>
              construction of retention ponds and bioswales; and
            </li>
            <li className={cx(styles.listItem)}>
              planting of native trees and shrubs to absorb floodwater.
            </li>
          </ul>
          <p>
            The department rallied residents around the program through public
            meetings, leafleting, online surveys, door knocking, a website, and
            socially distanced meetings, as well as engagement with the
            tenant-management council.
          </p>
          <p>
            These conversations helped ensure the park development would match
            the residents’ needs by including fitness and meditation spaces, a
            cultural-history trail, and recreational amenities.
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
          &quot;You can never communicate enough—so always over-communicate.
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
                Director Department of housing and community development
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
            Central to all efforts is communication with community members, from
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
        text="We’ve been successful because we have had buy-in from the community from the start. You have to think innovatively and then you have to engage the community at the forefront."
        image="/assets/images/stories/norfolk/nf_people_douglas_beaver.jpg"
        authorName="Doug Beaver"
        authorPosition="Chief Resilience officer"
        authorCompany="City of Norfolk"
      />
    </div>
  );
};

const Section15 = () => {
  return (
    <div
      className={cx(
        styles.bgGray,
        styles.textWhite,
        styles.footerPageContainer
      )}
    >
      <div>
        <p>
          1 Rebecca Hersher, “High-Tide Flooding on the Rise, Especially Along
          the East Coast, Forecasters Warn,” NPR, July 10, 2019,
          {' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.npr.org/2019/07/10/739466268/high-tide-flooding-on-the-rise-especially-along-the-east-coast-forecasters-warn?t=1627373425253"
          >
            https://www.npr.org/2019/07/10/739466268/high-tide-flooding-on-the-rise-especially-along-the-east-coast-forecasters-warn?t=1627373425253.
          </a>
        </p>
        <p>
          2 “The State of High Tide Flooding and Annual Outlook,” National
          Oceanic and Atmospheric Administration,
          {' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://tidesandcurrents.noaa.gov/HighTideFlooding_AnnualOutlook.html"
          >
            https://tidesandcurrents.noaa.gov/HighTideFlooding_AnnualOutlook.html;
          </a>
          {' '}
          “U.S. High-Tide Flooding Breaks Records,” National Oceanic and
          Atmospheric Administration, July 14, 2021,
          {' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.noaa.gov/news-release/us-high-tide-flooding-breaks-records"
          >
            https://www.noaa.gov/news-release/us-high-tide-flooding-breaks-records.
          </a>
        </p>
        <p>
          3 Nicholas Kusnetz, “Norfolk Wants to Remake Itself as Sea Level
          Rises, But Who Will Be Left Behind?” Inside Climate News, May 21,
          2018,
          {' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://insideclimatenews.org/news/21052018/norfolk-virginia-navy-sea-level-rise-flooding-urban-planning-poverty-coastal-resilience"
          >
            https://insideclimatenews.org/news/21052018/norfolk-virginia-navy-sea-level-rise-flooding-urban-planning-poverty-coastal-resilience/.
          </a>
        </p>
        <p>
          4 “Ohio Creek Watershed Project,” City of Norfolk,
          {' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.norfolk.gov/3867/Ohio-Creek-Watershed-Project"
          >
            https://www.norfolk.gov/3867/Ohio-Creek-Watershed-Project
          </a>
        </p>
      </div>
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
      <Section12 />
      <Section11 />
      <Section13 />
      <Section14 />
      <Section15 />
      <MetaFooter exploreLink="/explore?id=227538" story="norfolk" />
    </div>
  );
};

export default Norfolk;
