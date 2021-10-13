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
            Rebates for
            <br />
            <span className={styles.underline}> rainwater</span>
          </span>
        </div>
        <div className={styles.section1Text}>
          <p>
            In Arizona, the climate crisis has intensified drought and water
            shortages so much that, for the first quarter of 2021, the majority
            of the state was either in severe, extreme or exceptional drought.
          </p>
          <p>
            Worse, the extent of extreme and exceptional droughts has increased
            dramatically over the past decade.
          </p>
          <p>
            In Tucson, the community has long been dependent on groundwater
            flowing from the snowy north into the dry south. Melted water from
            the snowpacks in Colorado traditionally flows into Lake Mead,
            providing a water supply even in the height of summer.
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
        thumbnail="/assets/images/stories/tucson/tu_video_thumb.png"
        url="https://www.youtube.com/watch?v=s8UJCYmwhQg&ab_channel=AtlanticCouncil"
      />
    </div>
  );
};

const Section3 = () => {
  return (
    <div className={cx(styles.section3, styles.bgSecondary)}>
      <div>
        <div className={cx(styles.col, styles.colRight)} />
        <div className={cx(styles.col, styles.colLeft, styles.textWhite)}>
          <p>
            But a changing climate means less snow in Colorado – and that means
            less water in Arizona.
          </p>
          <p>
            This issue extends beyond Arizona. In August 2021, almost half of
            the U.S. was experiencing some form of drought, the majority in the
            western US. This “megadrought” began in 2000, and currently impacts
            the lives of 57 million U.S. citizens. There has been nothing like
            it for over 1,200 years – and it represents climate change-induced
            aridification.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section4 = () => {
  return (
    <div className={cx(styles.section4, styles.bgLightBlue, styles.textGray)}>
      <div className={styles.contentLeft}>
        <img
          src="/assets/images/stories/tucson/tu_section_4_bg.png"
          className={styles.section4Img}
          alt=""
        />
      </div>
      <div className={cx(styles.contentRight, styles.container)}>
        <h5 className={cx(styles.sectionTitle)}>
          Helping Households Help Themselves
        </h5>
        <p>
          Tucson Water recognized that a changing climate needed a new response
          to water shortages. In 2011, it established a rebate program designed
          to support households in making simple adaptations to their homes that
          would help them harvest rainwater, as well as installing
          water-efficient toilets and washers.
        </p>
        <p>The program offers Tucson Water customers the following rebates:</p>
        <ul>
          <li className={styles.orderListItem}>
            <span className={cx(styles.textPrimary, styles.bold)}>
              {' '}
              Rainwater harvesting rebate:
            </span>
            {' '}
            up to $2,000
          </li>
          <li className={styles.orderListItem}>
            <span className={cx(styles.textPrimary, styles.bold)}>
              Gray water rebate:
            </span>
            {' '}
            50% of the costs up to $1,000
          </li>
          <li className={styles.orderListItem}>
            <span className={cx(styles.textPrimary, styles.bold)}>
              {' '}
              Rainwater Harvesting Grant (Low-Income Program):
            </span>
            {' '}
            a grant of up to $750 for families with an income equal to or less
            than 100% of the Federal Poverty Level
          </li>
        </ul>
      </div>
    </div>
  );
};

const Section5 = () => {
  return (
    <div className={cx(styles.section5, styles.bgGray)}>
      <div>
        <div className={cx(styles.col, styles.colRight)} />
        <div className={cx(styles.col, styles.colLeft, styles.textWhite)}>
          <p>
            Tucson Water raised awareness of the program through notices on
            water bills, as well as on their website, social media, and
            community interaction.
          </p>
          <p>
            When households apply for the rebate, they are first invited to a
            three-hour workshop to learn more about conservation and water
            efficiency.
          </p>
          <p>
            The workshop provides an opportunity for the homeowner to work with
            Tucson Water to plan and calculate how much water they can save.
            They can discuss how much water can be harvested from rooftop
            run-off after rainfall. If significant, Tucson Water would recommend
            installing gutters and a cistern to collect rainwater and advise on
            how to put that water to use. For example, they may suggest
            homeowners use the excess water to irrigate lawns and gardens.
          </p>
          <p>
            Following the workshop, the homeowner is free to hire their own
            contractors to complete the fitting of their rainwater harvest
            system, toilet or washer or make use of Tucson Water referrals for
            qualified contractors.
          </p>
          <p>
            Once the work is done, the homeowner can redeem the applicable
            rebates by providing Tucson Water with the receipts as proof of
            work.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section6 = () => {
  return (
    <div className={cx(styles.bgPrimary, styles.quoteContainer)}>
      <Quote
        text="Even though the Tucson population is growing, the water consumption has been declining. Our water consumption has gone down to the level of what we were in 1970. It is amazing."
        image="/assets/images/stories/tucson/tu_people_irene_ogata.jpg"
        authorName="Irene Ogata"
        authorPosition="Urban Landscape Manager"
        authorCompany="Tucson Water"
      />
    </div>
  );
};

const Section7 = () => {
  return (
    <div className={cx(styles.section7, styles.bgWhite)}>
      <div>
        <div className={cx(styles.col, styles.colLeft)} />
        <div className={cx(styles.col, styles.colRight, styles.textGray)}>
          <h5 className={cx(styles.sectionTitle)}>The Conservation Fee</h5>
          <p>
            Tucson Water funds the rebate program using a Conservation Fee
            attached to its water bills. A household pays around 8¢ per centum
            cubic feet (CCF). This is a unit of measure used on water bills that
            equals approximately 748 gallons. The sum goes directly to funding
            water conservation projects. The fee has helped fund 60,690
            residential rebates.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section8 = () => {
  return (
    <div className={cx(styles.section8, styles.bgSecondary, styles.textWhite)}>
      <div className={styles.contentLeft}>
        <img
          src="/assets/images/stories/tucson/tu_section_8_bg.png"
          className={styles.section8Img}
          alt=""
        />
      </div>
      <div className={cx(styles.contentRight, styles.container)}>
        <h5 className={cx(styles.sectionTitle)}>
          Reaching Low-Income Households
        </h5>
        <p>
          Water shortages and droughts disproportionately impact lower-income
          households that have less expendable income to finance a rainwater
          harvest system and participate in Tucson Water’s water conservation
          programs.
        </p>
        <p>
          Analysis of rebate program users revealed the majority resided in the
          wealthier northern enclave of the city, meaning that the recipients of
          the rebate program were better positioned to afford the upfront cost
          for water-saving measures before being reimbursed.
        </p>
        <p>
          In low-income, majority-Hispanic areas, in which many people do not
          speak English as a first language, fewer families were applying for
          rebates. Initially, a lack of interest was assumed, particularly as
          they were less likely to have gardens that could benefit from
          harvested rainwater.
        </p>
      </div>
    </div>
  );
};

const Section10 = () => {
  return (
    <div className={cx(styles.section10, styles.bgWhite, styles.textGray)}>
      <div className={styles.container}>
        <div className={styles.contentRight}>
          <img
            src="/assets/images/stories/tucson/tu_section_10_bg.png"
            className={styles.section10Img}
            alt=""
          />
        </div>
        <div className={styles.contentLeft}>
          <p>
            To qualify for the program, a household has to demonstrate that
            they:
          </p>
          <ul>
            <li className={cx(styles.listItem)}>
              Fall under the federal poverty limit
            </li>
            <li className={cx(styles.listItem)}>
              Pay for their water utilities through Tucson Water
            </li>
            <li className={cx(styles.listItem)}>Paid property taxes</li>
            <li className={cx(styles.listItem)}>
              Own or rent a property in good condition
            </li>
            <li className={cx(styles.listItem)}>
              Maintain the system when it is installed
            </li>
            <li className={cx(styles.listItem)}>
              Can provide their water records for the year previous, and year
              after, the installation
            </li>
            <li className={cx(styles.listItem)}>Paid property taxes</li>
            <li className={cx(styles.listItem)}>
              Can attend a three-hour educational workshop
            </li>
          </ul>
          <p>
            If their application is successful and these requirements are met,
            SERI works with a private contractor to assess the property and
            collaborates with the homeowner to understand which rainwater
            harvesting solutions can be implemented. This might be a passive or
            active cistern, or groundworks system.
          </p>
          <p>
            SERI, the contractor and the homeowner agree on the scope of work
            and the costs.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section11 = () => {
  return (
    <div className={cx(styles.section11, styles.bgGray, styles.textWhite)}>
      <div className={styles.contentLeft}>
        <img
          src="/assets/images/stories/tucson/tu_section_11_bg.png"
          className={styles.section4Img}
          alt=""
        />
      </div>
      <div className={cx(styles.contentRight, styles.container)}>
        <p>
          If the homeowner gives the go-ahead, they can choose whether to use
          SERI’s contractor or hire their own. The vast majority choose to go
          with SERI’s recommendation.
        </p>
        <p>
          SERI provides a grant to cover the majority of the costs, and can
          offer a no-interest loan to cover the full costs of the installation.
          The homeowner does not have to apply for the rebate as SERI submits
          all the paperwork to Tucson Water directly.
        </p>
        <p>
          Tucson and SERI measure the success of the intervention by the number
          of installations they complete. Since launching the low-income rebate
          program, SERI has worked with over 400 households, installing $460,000
          worth of rainwater harvesting systems and giving out $73,000 in
          grants.
        </p>
      </div>
    </div>
  );
};

const Section12 = () => {
  return (
    <div className={cx(styles.section12, styles.bgWhite)}>
      <div>
        <div className={cx(styles.col, styles.colRight)} />
        <div className={cx(styles.col, styles.colLeft, styles.textGray)}>
          <h5 className={cx(styles.sectionTitle)}>A Greener Home</h5>
          <p>
            Along with installing the rainwater harvesting system, SERI
            encourages low-income households to plant drought-resistant gardens
            which can be tended using the collected rainwater.
          </p>
          <p>
            This increases people’s well-being and helps to tackle extreme heat
            by increasing the tree canopy.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section13 = () => {
  return (
    <div className={cx(styles.bgPrimary, styles.quoteContainer)}>
      <Quote
        text="All families are interested in doing things to help their families but some of them just have different resources available to do it. Look for ways to get over the barriers of why people aren't participating in your programs, and then try to reduce those barriers."
        image="/assets/images/stories/tucson/tu_people_irene_ogata.jpg"
        authorName="Ann Marie Wolf"
        authorPosition="Director"
        authorCompany="Sonora Environmental Research Institute (SERI)"
      />
    </div>
  );
};

const Tucson = () => {
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
      <Section10 />
      <Section11 />
      <Section12 />
      <Section13 />
      <MetaFooter exploreLink="/explore?id=224706" />
    </div>
  );
};

export default Tucson;
