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
            Community Mobilization
            <br />
            for 
            {' '}
            <span className={styles.underline}>Cool Neighborhoods</span>
          </span>
        </div>
        <div className={styles.section1Text}>
          <p>
            New York City has become increasingly vulnerable to events linked to
            the climate crisis, including hurricanes like Superstorm Sandy in
            2012, coastal flooding, and extreme heat.
          </p>
          <p>
            Each summer, roughly four hundred New York residents are
            hospitalized due to heat-related causes, while at least 100–125
            succumb to their deadly effects. The actual number may be higher, as
            fatal incidents such as cardiac arrests in high summer may not be
            recorded as heat related.
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
        thumbnail="/assets/images/stories/newyork/ny_video_thumb.png"
        url="https://www.youtube.com/watch?v=e5cPfXygHdk&ab_channel=AtlanticCouncil"
      />
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
            redlined zones—primarily Black neighborhoods, including upper
            Manhattan and the Bronx. Air pollution is around twenty times more
            severe in some parts of the Bronx than in the rest of the city,
            leading to higher-than-average temperatures.
          </p>
          <p>
            These are neighborhoods where there is significantly less tree
            canopy, higher levels of air pollution, and a history of
            disinvestment—and where residents sometimes struggle to afford
            amenities like air conditioning.
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
            To address extreme heat, the New York City Mayor’s Office of Climate
            Resiliency worked with numerous partners—including community groups,
            the New York City Panel on Climate Change, Columbia University, the
            New York City Emergency Management Agency, the New York City Small
            Business Service, the Department of Parks and Recreation, and the
            New York City Department of Health to initiate a number of heat
            adaptation programs and tools as part of Cool Neighborhoods NYC.
          </p>
          <p>
            The program is New York City’s first heat adaptation plan. Launched
            in 2017, it is a comprehensive resilience strategy that is informed
            by health and climate data. The program focuses investments and
            programming in the most vulnerable and underserved communities in
            New York City.
          </p>
          <p>Examples of initiatives within the project include</p>
          <ul>
            <li className={cx(styles.listItem)}>
              creating a Heat Vulnerability Index;
            </li>
            <li className={cx(styles.listItem)}>
              reforming the Low Income Home Energy Assistance Program (LIHEAP)
              {' '}
            </li>
            <li className={cx(styles.listItem)}>increasing the tree canopy;</li>
            <li className={cx(styles.listItem)}>
              investing in cooling centers;
            </li>
            <li className={cx(styles.listItem)}>
              developing the NYC CoolRoofs Program; and
            </li>
            <li className={cx(styles.listItem)}>
              creating Be A Buddy, a community collaboration.
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
          The New York City Mayor&apos;s Office of Climate Resiliency and the
          New York City Department of Health partnered to develop Cool
          Neighborhoods. The Heat Vulnerability Index was developed by the New
          York City Department of Health and Columbia University.
        </p>
        <p>
          The index is a tool to understand what neighborhoods face the greatest
          risk from extreme heat, as well as where to invest in green
          infrastructure and programming that supports social cohesion—such as
          the Be A Buddy program—and where to target outreach for cooling
          services such as cooling centers or the Home Energy Assistance
          Program.
        </p>
        <p>
          Using data, generated by the index, the Mayor&apos;s Office of Climate
          Resiliency advocated for funding from the City for a range of cooling
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
        text="The Heat Vulnerability Index is a data tool grounded in climate equity as a way to make investments."
        image="/assets/images/stories/newyork/ny_people_daphne_lundi.jpeg"
        authorName="Daphne Lundi"
        authorPosition="Deputy Director of Social Resilience"
        authorCompany="New York City Mayor´s Office of Climate Resilience"
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
            various neighborhoods in upper Manhattan, the Bronx, and Brooklyn.
            <sup>1</sup>
          </p>
          <p>
            Be A Buddy is designed to prepare the community for future climate
            events through climate health education and community preparedness.
          </p>
          <p>
            The Hunts Point Section in the South Bronx, for instance, is an
            environmental justice community that works to solve local problems
            that have traditionally led to poor health outcomes, such as high
            levels of diabetes, heart disease, and obesity.
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
          The Be A Buddy program is run out of a community center, The Point
          Community Development Corporation (“THE POINT CDC”), located in the
          Hunts Point Section. This community-outreach organization is dedicated
          to youth development and the cultural and economic revitalization of
          the neighborhood. The program trains people of all ages in the
          neighborhood to support vulnerable residents.
        </p>
        <p>
          The support includes an Emergency Preparedness Program funded by the
          New York City Department of Health as part of a pilot project. The
          target demographic of the program is vulnerable seniors who are at
          risk of extreme-heat-related illnesses, such as asthma and cardiac
          arrest.
        </p>
      </div>
    </div>
  );
};

const Section9 = () => {
  return (
    <div className={cx(styles.bgSecondary, styles.quoteContainer)}>
      <Quote
        text="When there’s trouble, the folks that respond first are our neighbors. Being able to train each other, and to be able to create plans around how we work together in the case of an emergency, is a very real and living thing for people at this point."
        image="/assets/images/stories/newyork/ny_people_danny_peralta.jpg"
        authorName="Danny Peralta"
        authorPosition="Managing Director"
        authorCompany="The Point Community Development Corporation"
      />
    </div>
  );
};

const Section10 = () => {
  return (
    <div className={cx(styles.section10, styles.bgWhite, styles.textGray)}>
      <div className={styles.contentRight}>
        <img
          src="/assets/images/stories/newyork/ny_section_10_bg.png"
          className={styles.section10Img}
          alt=""
        />
      </div>
      <div className={styles.container}>
        <div className={styles.contentLeft}>
          <p>
            Buddies are trained on the impact of extreme heat. They also run
            cooling stations in the neighborhood that operate not only as places
            of rest and sanctuary, but as outreach opportunities to direct
            residents to other services they may need to access. The cooling
            stations have also become hubs for public art and performance.
          </p>
          <p>
            Be A Buddy systems have reached thousands of New York residents
            ahead of heatwave events, helping to prepare them for a potential
            emergency.
          </p>
          <p>
            As a result, the intervention has helped increase social cohesion,
            while also tackling extreme heat.
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
        text="Everybody has their own communities already, that they are part of. How can we bring people in those communities together to form new networks?"
        image="/assets/images/stories/newyork/ny_people_aryanna_osorio.jpeg"
        authorName="Aryanna Osorio"
        authorPosition="Resilience Coordinator"
        authorCompany="Be a Buddy"
      />
    </div>
  );
};

const Section12 = () => {
  return (
    <div className={cx(styles.section12, styles.bgWhite, styles.textGray)}>
      <div className={styles.contentRight}>
        <img
          src="/assets/images/stories/newyork/ny_section_12_bg.png"
          className={styles.section12Img}
          alt=""
        />
      </div>
      <div className={styles.container}>
        <div className={styles.contentLeft}>
          <h5 className={cx(styles.sectionTitle)}>Tree Cover</h5>
          <p>
            The heat vulnerability index helps identify neighborhoods in New
            York where residents are most at risk of heat mortality–
            neighborhoods that tend to be low-income and predominantly Black
            communities. The city allocated $100 million to planting street
            trees and increasing tree cover in public parks to create more shade
            that can, in turn, tackle extreme heat. Since 2017, the program has
            planted six thousand trees. While it will take several years to see
            the impact of increasing tree canopy to adapt to extreme heat
            impacts, the city recognized that investing in tree planting now
            will reap benefits over time.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section13 = () => {
  return (
    <div className={cx(styles.section13, styles.bgGray, styles.textWhite)}>
      <div className={styles.contentLeft}>
        <img
          src="/assets/images/stories/newyork/ny_section_13_bg.png"
          className={styles.section13Img}
          alt=""
        />
      </div>
      <div className={cx(styles.contentRight, styles.container)}>
        <h5 className={cx(styles.sectionTitle)}>NYC CoolRoofs Program</h5>
        <p>
          Using the index to identify heat-vulnerable neighborhoods, NYC
          CoolRoofs offers a service to affordable housing, public housing, and
          community centers to coat those spaces with white paint. This creates
          a thermal barrier and lowers a building’s temperature.
        </p>
        <p>
          Because the Heat Vulnerability Index is used to identify spaces for
          the intervention, the city proactively reaches out to building owners
          and residents to see if they are interested in the program. As the
          program is focused on social housing and community properties, tenants
          do not need to apply for the intervention—the city comes to them.
        </p>
        <p>
          Critical social infrastructure is prioritized, and the city funds the
          intervention. Working with the New York City Small Business Service,
          the NYC CoolRoofs Program also trains unemployed and under-employed
          people through the Housing Opportunities and Prevention of Evictions
          (HOPE) Program on how to deliver the intervention, providing new
          green-industry job opportunities. The program recruits 50–70 people
          annually.
        </p>
      </div>
    </div>
  );
};

const Section14 = () => {
  return (
    <div className={cx(styles.section14, styles.textGray, styles.bgLightBlue)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.section14Wrapper)}>
          <div>
            <h5 className={cx(styles.sectionTitle)}>Cooling Centers</h5>
            <p className={styles.paragraph}>
              Every year, New York operates several hundred cooling centers,
              where residents struggling with extreme heat can find relief in a
              cool space. This might be in a community center with air
              conditioning, or simply a shaded area with running water, such as
              a fountain.
            </p>
            <p className={styles.paragraph}>
              The mayor’s office has worked to improve signage to the cooling
              centers, in partnership with New York City Emergency Management,
              to inform community members about places where they can cool down
              during heat waves. The city is also working with Emergency
              Management to deliver training on heat preparedness.
            </p>
          </div>
          <div>
            <h5 className={cx(styles.sectionTitle)}>Get Cool NYC</h5>
            <p className={styles.paragraph}>
              The coronavirus crisis meant more vulnerable people were trapped
              indoors, often in housing not designed for extreme heat. In
              response, the city ran an air-conditioning program, providing air
              conditioners to seventy-four thousand low-income seniors in 2020.
              The mayor’s office worked with local community groups to identify
              those individuals most in need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section15 = () => {
  return (
    <div className={cx(styles.bgSecondary, styles.quoteContainer)}>
      <Quote
        text="It's critical to understand the work that's being done on the ground. For our work, particularly around preparedness, having those community partners has been really critical in our ability to reach people."
        image="/assets/images/stories/newyork/ny_people_daphne_lundi.jpeg"
        authorName="Daphne Lundi"
        authorPosition="Deputy Director of Social Resilience"
        authorCompany="New York City Mayor´s Office of Climate Resiliency"
      />
    </div>
  );
};

const Section16 = () => {
  return (
    <div className={cx(styles.bgWhite, styles.textGray, styles.section16)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.section16Aside)}>
          &quot;Understand the social infrastructure you are working with.&quot;
          <div className={cx(styles.quoteAuthor)}>
            <div className={cx(styles.quoteImage)}>
              <img
                src="/assets/images/stories/newyork/ny_people_daphne_lundi.jpeg"
                alt="Daphne Lundi"
              />
            </div>
            <div className={cx(styles.quoteInfo)}>
              <div className={styles.quoteAuthorName}>Daphne Lundi</div>
              <div className={styles.quoteAuthorPosition}>
                Deputy Director of Social Resilience
              </div>
              <div className={styles.quoteAuthorCompany}>
                New York City Mayor´s Office of Climate Resiliency
              </div>
            </div>
          </div>
        </div>
        <div className={cx(styles.section16Wrapper)}>
          <p>
            Key to Cool Neighborhoods NYC’s success has been working with both
            physical and social infrastructure in the city to identify
            individuals in need, and tapping into and supporting existing
            initiatives that are trusted and recognized by local communities.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section17 = () => {
  return (
    <div className={cx(styles.bgPrimary, styles.quoteContainer)}>
      <Quote
        text="We need to invest in programs like Be A Buddy, which are preemptive. They serve to prepare people and identify the root causes of problems, rather than wait until after the damage is done."
        image="/assets/images/stories/newyork/ny_people_danny_peralta.jpg"
        authorName="Danny Peralta"
        authorPosition="Managing Director"
        authorCompany="The Point Community Development Corporation"
      />
    </div>
  );
};

const Section18 = () => {
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
          1 “Be A Buddy,” Point,
          {' '}
          <a href="https://thepoint.org/be-a-buddy-program">
            https://thepoint.org/be-a-buddy-program/.
          </a>
        </p>
      </div>
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
      <Section10 />
      <Section11 />
      <Section12 />
      <Section13 />
      <Section14 />
      <Section15 />
      <Section16 />
      <Section17 />
      <Section18 />
      <MetaFooter exploreLink="/explore?id=224581" />
    </div>
  );
};

export default NewYork;
