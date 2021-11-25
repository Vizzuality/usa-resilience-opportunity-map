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
            <span className={styles.underline}>Rainwater</span>
          </span>
        </div>
        <div className={styles.section1Text}>
          <p>
            In Arizona, the climate crisis has intensified drought and water
            shortages so much that, for the first quarter of 2021, the majority
            of the state was in severe, extreme, or exceptional drought.
            {' '}
            <sup>1</sup>
          </p>
          <p>
            Worse, the extent of extreme and exceptional droughts has increased
            dramatically over the past decade. 
            {' '}
            <sup>2</sup>
          </p>
          <p>
            Since 1993, with the completion of the Central Arizona Project
            (CAP), Tucson has been utilizing surface water flowing from the
            snowy north into the dry south. Melted water from the snowpacks in
            Colorado traditionally flows into Lake Mead, providing a water
            supply even in the height of summer.
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
        url="https://youtu.be/avabWfeXuxA"
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
            But, a changing climate means less snow in Colorado—and that means
            less water to Arizona and other downstream states receiving Colorado
            river water.
          </p>
          <p>
            This issue extends beyond Arizona. In August 2021, almost half of
            the United States was experiencing some form of drought, the
            majority in the western United States.3 This “megadrought” began in
            2000, and currently impacts the lives of fifty-seven million US
            citizens. There has been nothing like it for more than twelve
            hundred years—and it represents climate-change-induced
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
          Tucson Water, alongside the surrounding community, recognized that a
          changing climate needed a new response to water shortages. In 2011, it
          established a rebate program designed to support households in making
          simple adaptations to their homes that would help them harvest
          rainwater, as well as installing water-efficient toilets and washers.
        </p>
        <p>
          The program offers Tucson Water customers the following rebates aimed
          at outdoor water use.
        </p>
        <ul>
          <li className={styles.orderListItem}>
            <span className={cx(styles.textPrimary, styles.bold)}>
              {' '}
              Rainwater Harvesting Rebate:
            </span>
            {' '}
            up to $2,000
          </li>
          <li className={styles.orderListItem}>
            <span className={cx(styles.textPrimary, styles.bold)}>
              Gray Water Rebate:
            </span>
            {' '}
            50% of the costs up to $1,000
          </li>
          <li className={styles.orderListItem}>
            <span className={cx(styles.textPrimary, styles.bold)}>
              {' '}
              Rainwater Harvesting Grant
            </span>
            {' '}
            (low-income program): a grant of up to $750 for families with an
            income equal to or less than 100 percent of the federal poverty
            level.
            <sup>4</sup>
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
            Tucson Water raised awareness of the Rainwater Harvesting and Gray
            Water Rebate programs through notices on water bills, as well as
            through its website, social media, and community interaction.
          </p>
          <p>
            When households apply for these rebates, they are first required to
            attend a three-hour workshop to learn more about conservation and
            water efficiency, the benefits of rainwater harvesting, and how to
            calculate, install and maintain the system.
          </p>
          <p>
            The workshop provides an opportunity for the homeowner to better
            understand how to plan and calculate how much water they can save,
            as well as how much water can be harvested from rooftop runoff after
            rainfall. The workshops cover active water harvesting that includes
            installing gutters and a cistern to collect rainwater and how to put
            that water to use. For example, homeowners can use collected rain to
            irrigate trees and gardens.
          </p>
          <p>
            Following the workshop, the homeowner is free to hire their own
            contractors or to complete the installation of their active and/or
            passive rainwater harvest system. Tucson Water maintains a list of
            qualified contractors in case the homeowner requires a referral.
          </p>
          <p>
            Once the work is done, the homeowner can apply for the applicable
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
            Tucson Water funds the rebate program using a conservation fee
            attached to its water bills. A household pays around eight cents per
            centum cubic feet (CCF). CCF is a unit of measure used on water
            bills that equals approximately 748 gallons. The funding source
            covers the water-conservation rebates and education/outreach
            programs. The fee has helped fund 60,690 residential rebates.
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
          harvest system and participate in Tucson Water’s Water Conservation
          Rebate program.
        </p>
        <p>
          Analysis of the Rainwater Harvesting Rebate program revealed the
          majority of installations were occurring in mid-to upper-income
          northern areas of the city, where recipients of the rebate program
          were better positioned to afford the upfront cost for water-saving
          measures before being reimbursed.
        </p>
        <p>
          In low-income, majority-Hispanic areas, where residents may not speak
          English as a first language, fewer families were applying for rebates.
        </p>
      </div>
    </div>
  );
};

const Section9 = () => {
  return (
    <div className={cx(styles.section9, styles.bgLightBlue, styles.textGray)}>
      <div className={styles.contentLeft}>
        <img
          src="/assets/images/stories/tucson/tu_section_9_bg.png"
          className={styles.section9Img}
          alt=""
        />
      </div>
      <div className={cx(styles.contentRight, styles.container)}>
        <p>
          The nonprofit organization Sonora Environmental Research Institute
          (SERI) suspected low-income households weren’t applying for the rebate
          because they didn’t have the funds to pay for interventions in advance
          or because of a potential language barrier in understanding access to
          the rebate programs.
        </p>
        <p>
          SERI utilized a grant from the Environmental Protection Agency’s
          Climate Justice Project and its own funds to launch a pilot to bring
          rainwater-harvesting solutions to low-income households. When the
          pilot affirmed the underlying supposition, Tucson Water reworked the
          program to provide accessibility to this low-income population of
          Tucson Water consumers.
        </p>
        <p>
          SERI trains community health workers to visit residents and invite
          them to apply to Tucson Water’s rebate programs.
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
            To qualify for the program, a household has to demonstrate that it
          </p>
          <ul>
            <li className={cx(styles.listItem)}>
              falls under the federal poverty limit;
            </li>
            <li className={cx(styles.listItem)}>
              pays for water utilities through Tucson Water;
            </li>
            <li className={cx(styles.listItem)}>paid property taxes;</li>
            <li className={cx(styles.listItem)}>
              owns or rents a property in good condition;
            </li>
            <li className={cx(styles.listItem)}>
              maintains the system when it is installed;
            </li>
            <li className={cx(styles.listItem)}>
              can provide its water records for the year previous, and the year
              after the installation; and
            </li>
            <li className={cx(styles.listItem)}>
              can attend a three-hour educational workshop.
            </li>
          </ul>
          <p>
            If the application is successful and these requirements are met,
            SERI works with a private contractor to assess the property, and
            collaborates with the homeowner to design rainwater-harvesting
            solutions that best suit their property. This might be a passive
            system of earthworks, an active system of roof gutters and a
            cistern.
          </p>
          <p>
            SERI, the contractor, and the homeowner agree on the scope of work
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
          className={styles.section11Img}
          alt=""
        />
      </div>
      <div className={cx(styles.contentRight, styles.container)}>
        <p>
          If the homeowner gives the go-ahead, they can choose whether to use
          SERI’s contractor or hire their own licensed contractor. The vast
          majority choose SERI’s recommendation.
        </p>
        <p>
          SERI provides a grant to cover the majority of the costs, and can
          offer a no-interest loan to cover the full cost of the installation.
          The homeowner does not need to apply for the rebate, as SERI submits
          all the paperwork to Tucson Water directly.
        </p>
        <p>
          One measure of success of this program has been the accessibility of
          the rebates and the number of installations they have completed. Since
          launching the low-income rebate program, SERI has worked with more
          than four hundred households, installing $460,000 worth of
          rainwater-harvesting systems and giving out $73,000 in grants.
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
            Along with installing the rainwater-harvesting system, SERI
            encourages low-income households to plant drought-resistant gardens
            that can be tended using the collected rainwater.
          </p>
          <p>
            This contributes to people’s wellbeing and helps to tackle other
            climate impacts, such as extreme heat, by increasing their green
            space.
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
        authorCompany="SERI"
      />
    </div>
  );
};

const Section14 = () => {
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
          1 “Drought,” Arizona Department of Water Resources,
          {' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://new.azwater.gov/drought/drought-status"
          >
            https://new.azwater.gov/drought/drought-status.
          </a>
        </p>
        <p>
          2 “Drought Status Update,” Eye on Drought, June 2011,
          {' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://new.azwater.gov/sites/default/files/media/June%202011.pdf"
          >
            https://new.azwater.gov/sites/default/files/media/June%202011.pdf.
          </a>
        </p>
        <p>
          3 US Drought Monitor, Map Archive, 31 August 2021,
          <a
            target="_blank"
            rel="noreferrer"
            href="https://droughtmonitor.unl.edu/data/pdf/20210831/20210831_usdm.pdf"
          >
            https://droughtmonitor.unl.edu/data/pdf/20210831/20210831_usdm.pdf
          </a>
        </p>
        <p>
          4 “Apply for Water Conservation Rebates,” City of Tucson,
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.tucsonaz.gov/water/apply-for-rebates"
          >
            https://www.tucsonaz.gov/water/apply-for-rebates.
          </a>
        </p>
      </div>
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
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Section13 />
      <Section14 />
      <MetaFooter exploreLink="/explore?id=224706" story="tucson" />
    </div>
  );
};

export default Tucson;
