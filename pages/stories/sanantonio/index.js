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
            Tackling Drought and
            <br />
            Saving Water through
            <br />
            <span className={styles.underlinePrimary}>
              {' '}
              Resilient Gardening
            </span>
          </span>
        </div>
        <div className={styles.section1Text}>
          <p>
            According to the US Drought Monitor, San Antonio, Texas, is
            “abnormally dry.” 
            {' '}
            <sup>1</sup>
            {' '}
            The city experiences high
            temperatures and long dry spells, but also the occasional heavy
            downpour that can see months’ worth of rain drench the city in a
            matter of hours.
          </p>
          <p>
            In this erratic climate, water conservation has become a matter of
            urgency.
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
        thumbnail="/assets/images/stories/sanantonio/sa_video_thumb.png"
        url="https://youtu.be/cT6a38aX0eQ"
      />
    </div>
  );
};

const Section3 = () => {
  return (
    <div className={cx(styles.section3, styles.bgGray)}>
      <div>
        <div className={cx(styles.col, styles.colLeft)} />
        <div className={cx(styles.col, styles.colRight)}>
          <p>
            The existing response to dry weather and drought was threatening the
            long-term economic prospects of San Antonio. Businesses that had
            planned to set up in the region threatened to pull out, believing it
            was no longer a safe and productive place of work. The city was
            getting a reputation for being a poor steward of its water.
          </p>
          <p>
            Things came to a head when the US Fish and Wildlife Service demanded
            San Antonio become less dependent on the Edwards Aquifer for its
            local water supply to ensure habitat conservation and the continued
            reliability of the water source. This had been the city’s primary
            water supply through heavy rainfall and during drought.
          </p>
          <p>
            Without the Edwards Aquifer offering a reliable water supply, San
            Antonio was at greater risk of experiencing frequent water
            shortages. This led to concerns from local residents about how the
            water limitations would impact their access to clean water for
            everyday needs.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section4 = () => {
  return (
    <div className={cx(styles.section4, styles.bgWhite, styles.textGray)}>
      <div className={styles.container}>
        <div className={styles.contentRight}>
          <img
            src="/assets/images/stories/sanantonio/sa_section_4_bg.png"
            className={styles.section4Img}
            alt=""
          />
        </div>
        <div className={styles.contentLeft}>
          <p>
            The city government was forced to devise a solution to protect San
            Antonio residents during months of drought, with particular
            consideration for low-income individuals who would experience
            heightened impacts.
          </p>
          <p>
            It decided to promote greater sustainability through proactive
            initiatives that would help residents save water while getting
            involved in urban horticulture. This encouraged safe, reliable
            produce options; increased engagement with the natural world; and
            put support in place so low-income residents would not struggle to
            meet the rising costs of water.
          </p>
          <p>
            Not all US cities struggling with drought will have an aquifer as a
            primary water source. However, with the growing threat of a warming
            climate and more frequent bouts of drought, cities can become more
            aware of the impacts of drought on water supply, and the importance
            of water conservation and water-resource diversification as a
            resilience-building measure.
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
        text="We had a panic situation in terms of the long-term economic and growth prospects for San Antonio. We had a major employer that was saying: if you don't get a handle on this, we’re not going to keep our headquarters here. We felt like we were developing a reputation for being in a water crisis."
        image="/assets/images/stories/sanantonio/sa_people_karen_guz.jpg"
        authorName="Karen Guz"
        authorPosition="CONSERVATION DIRECTOR"
        authorCompany="San Antonio Water System"
      />
    </div>
  );
};

const Section6 = () => {
  return (
    <div className={cx(styles.section6, styles.bgWhite, styles.textGray)}>
      <div className={styles.contentLeft}>
        <img
          src="/assets/images/stories/sanantonio/sa_section_6_bg.png"
          className={styles.section6Img}
          alt=""
        />
      </div>
      <div className={cx(styles.contentRight, styles.container)}>
        <h5 className={cx(styles.sectionTitle)}>
          Water-Saving Programs Designed for People
        </h5>
        <p>
          San Antonio Water System (SAWS) set an ambitious target: to
          proactively secure one billion gallons of water annually. To do this,
          it needed to work with the community to encourage residents to save
          water through various educational, rebate, and financial-support
          programs.
        </p>
        <p>
          Working with the Conservation Department and nonprofits such as Bexar
          County Master Gardeners, San Antonio Water Systems launched a rebate
          program that included 
          {' '}
          <sup>2</sup>
        </p>
        <ul>
          <li className={styles.listItem}>
            a WaterSaver irrigation rebate and consultation;
          </li>
          <li className={styles.listItem}>a WaterSaver landscape coupon;</li>
          <li className={styles.listItem}>a WaterSaver patioscape coupon;</li>
          <li className={styles.listItem}>a swimming pool rebate; and</li>
          <li className={styles.listItem}>a water-flow-sensor rebate.</li>
        </ul>
      </div>
    </div>
  );
};

const Section7 = () => {
  return (
    <div className={cx(styles.section7, styles.textWhite, styles.bgGray)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.section7Wrapper)}>
          <p>
            To participate in the irrigation, swimming pool, or
            water-flow-sensor rebate program, homeowners followed a simple
            process that involves a property inspection by a SAWS representative
            to determine whether a rebate is available, and hired contractors to
            carry out the work.
          </p>
          <p>
            The rebate provides the financial support necessary for low-income
            households to participate in the water-conservation initiatives,
            which would otherwise be an economic barrier for these groups. The
            rebate program gives San Antonio residents the ability to implement
            sustainability measures in their homes to ensure future water
            supply, even during times of severe shortage.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section8 = () => {
  return (
    <div className={cx(styles.section8, styles.bgWhite, styles.textGray)}>
      <div className={styles.contentLeft}>
        <img
          src="/assets/images/stories/sanantonio/sa_section_8_bg.png"
          className={styles.section8Img}
          alt=""
        />
      </div>
      <div className={cx(styles.contentRight, styles.container)}>
        <p>
          Along with the rebates, SAWS offers a coupon program that helps
          homeowners create beautiful gardens using plants that are drought
          resistant. To apply for a WaterSaver landscape coupon, homeowners must
          commit to removing grass from their gardens and replacing it with a
          water-saving landscape. The coupons incentivize homeowners to take
          action to save water and support local horticultural businesses.
        </p>
        <p>
          The rebate program is funded through water bills paid by city
          residents. SAWS structured its rates so that a portion of the top-tier
          water bills goes into a restricted water-conservation fund. This means
          that those businesses and residents who use the most water are
          responsible for funding citywide long-term water-saving efforts.
        </p>
      </div>
    </div>
  );
};

const Section9 = () => {
  return (
    <div className={cx(styles.section9, styles.textWhite, styles.bgSecondary)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.section9Wrapper)}>
          <div>
            <p className={styles.paragraph}>
              However, as prices continued to rise with extended drought
              periods, the city’s lowest-income families simply couldn’t afford
              the rising cost of water. To help those struggling families, SAWS
              implemented an affordability discount that ranges between $2 to
              $20, depending on where a household sits on the federal poverty
              scale. Today, thirty-four thousand households qualify for the
              discount, which is paid for by the water-conservation fund.
            </p>
            <p className={styles.paragraph}>
              The decision to implement the discount and the rebate system means
              that no household is excluded from taking steps toward improved
              water sustainability.
            </p>
            <p className={styles.paragraph}>
              Despite the 2020 COVID-19 restrictions, San Antonio was still able
              to achieve incredible results with its program, including
            </p>
            <ul>
              <li className={styles.listItem}>
                2,774 no-contact irrigation consultations;
              </li>
              <li className={styles.listItem}>
                120,748 people engaging with educational resources; and
              </li>
              <li className={styles.listItem}>1,554 coupons used.</li>
            </ul>
            <p>
              As a result of the combined programs, the city saved 1.7 billion
              gallons of water in 2020—well above its target.
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
        <div className={cx(styles.col, styles.colLeft)} />
        <div className={cx(styles.col, styles.colRight, styles.textGray)}>
          <h5 className={cx(styles.sectionTitle)}>A City of Gardeners</h5>
          <p>
            Fundamental to SAWS’ approach is empowering people to plant gardens
            that can save water, while promoting urban horticulture. Homeowners
            can receive training in how to create a resilient garden that
            doesn’t require watering.
          </p>
          <p>
            SAWS works in partnership with the Bexar County Master Gardeners, a
            nonprofit dedicated to educating people about urban horticulture.
            Alongside decorative plants, the Bexar County Master Gardeners
            support homeowners by educating them how to properly water vegetable
            gardens so they do not use more water than required, promoting food
            sustainability.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section11 = () => {
  return (
    <div className={cx(styles.section11, styles.bgGray)}>
      <div>
        <div className={cx(styles.col, styles.colRight)} />
        <div className={cx(styles.col, styles.colLeft, styles.textWhite)}>
          <p>
            The Master Gardeners offer training courses, workshops, a gardening
            library, and more. The program’s two hundred and sixty members serve
            a population of more than two million residents. They delivered
            2,684 online continuing-education sessions throughout 2020, totaling
            9,818 volunteer hours.
          </p>
          <p>
            The Bexar County Master Gardeners recommend native and adaptive
            plants that don’t require significant water, and often remind
            participants in their workshops that this will help conserve water
            and allow community members to readily grow their gardens. When
            watering is required, they show residents how to reuse water from
            around the home, rather than running the tap or hose.
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
        text="Our landscape-care class is simple. We show people they don’t need to plant a ton, nor do they need an irrigation system to have a garden. We teach them proper watering techniques and how to care for native plants that don’t require a lot of water. We teach people how to garden where they are getting food, fresh greens, fresh salad, fresh tomatoes."
        image="/assets/images/stories/sanantonio/sa_people_anna_vogler.jpeg"
        authorName="Anna Vogler"
        authorPosition="WATER CONSERVATION COORDINATOR"
        authorCompany="Master Gardeners"
      />
    </div>
  );
};

const Section13 = () => {
  return (
    <div className={cx(styles.section13, styles.bgWhite)}>
      <div>
        <div className={cx(styles.col, styles.colLeft)} />
        <div className={cx(styles.col, styles.colRight, styles.textGray)}>
          <p>
            Since the Master Gardeners work in partnership with the rebate
            program, low-income residents can benefit from their support. They
            make sure to teach urban-horticulture skills that range from the
            rudimentary to the more sophisticated, to make it more accessible
            for everyone. Teaching people how to grow their own food sustainably
            can also help low-income families access fresh vegetables while
            saving money on their monthly utility bill.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section14 = () => {
  return (
    <div className={cx(styles.bgSecondary, styles.quoteContainer)}>
      <Quote
        text="We call it ‘plant by numbers.’ If you aren’t a gardener, and you just want someone to tell you what to do, we will give you a variety of plans for your home. We get them to think about: what are you trying to change? Then, we give them a plan."
        image="/assets/images/stories/sanantonio/sa_people_karen_guz.jpg"
        authorName="Karen Guz"
        authorPosition="CONSERVATION DIRECTOR"
        authorCompany="San Antonio Water System "
      />
    </div>
  );
};

const Section15 = () => {
  return (
    <div className={cx(styles.section15, styles.bgWhite)}>
      <div>
        <div className={cx(styles.col, styles.colRight)} />
        <div className={cx(styles.col, styles.colLeft, styles.textGray)}>
          <p>
            The Bexar County Master Gardeners provide more than two hundred
            workshops and presentations every year. In addition to teaching
            people how to develop their gardens, they also offer a rewards
            program, in which people attending multiple educational events are
            given a coupon to spend on plants and tools.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section16 = () => {
  return (
    <div className={cx(styles.bgPrimary, styles.quoteContainer)}>
      <Quote
        text="We are stewards of the earth, and we are responsible for properly caring for it. The more people we teach to use these simple, replicable solutions, and the more resilient landscapes we have, the better off we will all be."
        image="/assets/images/stories/sanantonio/sa_people_anna_vogler.jpeg"
        authorName="Anna Vogler"
        authorPosition="WATER CONSERVATION COORDINATOR"
        authorCompany="Master Gardeners"
      />
    </div>
  );
};

const Section17 = () => {
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
          1 &quot;Austion/San Antonio WFO Drought Status and Information&quot;
          National Weatjer Service,
          {' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.weather.gov/ewx/drought"
          >
            https://www.weather.gov/ewx/drought.
          </a>
        </p>
        <p>
          2 “Bexar County Master Gardeners,” Texas Master Gardener, Texas A&M
          Agrilife Extension,
          {' '}
          <a target="_blank" rel="noreferrer" href="https://bexarmg.org">
            https://bexarmg.org;
          </a>
          {' '}
          “Residential Programs and Rebates,” San Antonio Water System,
          {' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.saws.org/conservation/residential-outdoor-programs-rebates"
          >
            https://www.saws.org/conservation/residential-outdoor-programs-rebates/.
          </a>
        </p>
        <p>3 “Bexar County Master Gardeners.”</p>
      </div>
    </div>
  );
};

const SanAntonio = () => {
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
      <MetaFooter exploreLink="/explore?id=227137" story="san_antonio" />
    </div>
  );
};

export default SanAntonio;
