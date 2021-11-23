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
            Getting 
            {' '}
            <span className={styles.underline}>RainWise</span>
            <br />
            in Seattle
          </span>
        </div>
        <div className={styles.section1Text}>
          <p>
            Seattle is well known for its heavy rainfall. With one hundred and
            fifty days of rain a year, the city gets around thirty-seven inches
            of rainwater annually.
            <sup>1</sup>
          </p>
          <p>
            However, Seattle’s rain is changing. Extreme rainstorms have
            increased by 30 percent in Seattle since 2003.
            <sup>2</sup>
            The growing climate crisis has intensified the levels of rain,
            which—combined with rising sea levels—is contributing to flooding
            that causes disruption and disturbances across the city.
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
        thumbnail="/assets/images/stories/seattle/st_video_thumb.png"
        url="https://youtu.be/6TF7iDmUjyU"
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
            This includes flooded homes and blocked roads, preventing people
            from performing regular daily activities, and causing emotional
            distress and expensive property damage.
          </p>
          <p>
            During heavy rains, rainwater can enter sewer pipes causing them to
            fill and backup into people’s homes and businesses. Not only does
            this cause damage to property, but it poses a serious risk to
            sanitation and public health safety.
          </p>
          <p>
            Many of the neighborhoods suffering the worst impacts of flooding
            are populated by low-income, immigrant families and underserved
            minority groups.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section4 = () => {
  return (
    <div className={cx(styles.section4, styles.bgWhite, styles.textGray)}>
      <div className={styles.contentLeft}>
        <img
          src="/assets/images/stories/seattle/st_section_4_bg.png"
          className={styles.section4Img}
          alt=""
        />
      </div>
      <div className={cx(styles.contentRight, styles.container)}>
        <p>
          Alongside heavy rain, the water along Seattle’s Puget shoreline has
          risen by more than six inches in the past century. 
          {' '}
          <sup>3</sup>
          {' '}
          As
          global temperatures continue to rise, it’s estimated that Seattle will
          experience ten inches of sea level rise by 2050. 
          {' '}
          <sup>4</sup>
        </p>
        <p>
          In response to these climate impacts, Seattle’s city government
          partners with customers and communities to use flexible and resilient
          stormwater approaches like green stormwater infrastructure (GSI). This
          infrastructure is designed to collect, slow, and treat stormwater to
          reduce flooding. One of those programs, RainWise, is designed to
          empower customers and communities to implement simple solutions that
          help manage increased stormwater in their neighborhoods.
        </p>
      </div>
    </div>
  );
};

const Section5 = () => {
  return (
    <div className={cx(styles.bgPrimary, styles.quoteContainer)}>
      <Quote
        text="In high-risk areas, streets flood, people experience sewer backups, and water comes in off the street into private property. These are serious public health and safety challenges and, as climate change worsens, will only become a bigger problem."
        image="/assets/images/stories/seattle/st_people_tracy_tackett.jpg"
        authorName="Tracy Tackett"
        authorPosition="GSI EXPANSION INITIATIVE MANAGER"
        authorCompany="City of Seattle Public Utilities"
      />
    </div>
  );
};

const Section6 = () => {
  return (
    <div className={cx(styles.section6, styles.bgLightBlue)}>
      <div>
        <div className={cx(styles.col, styles.colRight)} />
        <div className={cx(styles.col, styles.colLeft, styles.textGray)}>
          <h5 className={cx(styles.sectionTitle)}>
            Turning Stormwater Runoff into Stormwater Soak In
          </h5>
          <p>
            Since 2010, the City of Seattle has been implementing RainWise, a
            resilience-building intervention that reduces stormwater in sewers
            during heavy rains. The program encourages homeowners to take simple
            steps in their homes and gardens to install green stormwater
            infrastructure and implement measures including
          </p>
          <ul>
            <li className={cx(styles.listItem)}>
              <span className={cx(styles.textPrimary, styles.bold)}>
                planting water-absorbing trees
              </span>
              {' '}
              (i.e., conifers);
            </li>
            <li className={cx(styles.listItem)}>
              <span className={cx(styles.textPrimary, styles.bold)}>
                reducing paved areas or impermeable surfaces
              </span>
              {' '}
              in gardens and drives;
            </li>
            <li className={cx(styles.listItem)}>
              <span className={cx(styles.textPrimary, styles.bold)}>
                improving soil quality
              </span>
              {' '}
              to increase stormwater absorption with compost and mulch;
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Section7 = () => {
  return (
    <div className={cx(styles.section7, styles.textWhite, styles.bgWhite)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.section7Wrapper)}>
          <ul className={cx(styles.col, styles.colLeft, styles.textGray)}>
            <li className={cx(styles.listItem)}>
              <span className={cx(styles.textPrimary, styles.bold)}>
                introducing permeable pavements
              </span>
              {' '}
              such as porous flagstones or gravel that absorbs stormwater;
            </li>
            <li className={cx(styles.listItem)}>
              <span className={cx(styles.textPrimary, styles.bold)}>
                installing a cistern
              </span>
              {' '}
              that can collect rainwater for use in the home and garden;
            </li>
            <li className={cx(styles.listItem)}>
              <span className={cx(styles.textPrimary, styles.bold)}>
                building a rain garden
              </span>
              ,a shallow depression that can hold stormwater; and
            </li>
            <li className={cx(styles.listItem)}>
              <span className={cx(styles.textPrimary, styles.bold)}>
                digging a rock-filled trench
              </span>
              {' '}
              in the garden that can absorb stormwater;
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Section8 = () => {
  return (
    <div className={cx(styles.section8, styles.bgGray)}>
      <div>
        <div className={cx(styles.col, styles.colRight)} />
        <div className={cx(styles.col, styles.colLeft, styles.textWhite)}>
          <p>
            These measures allow stormwater to soak into the ground or be
            collected, rather than run off roofs and gutters, which can lead to
            further flooding and divert wastewater back into the local waters.
          </p>
          <p>
            The RainWise program is promoted online, in postal mailings, at
            community events, and through “I’m RainWise” signs at project sites.
          </p>
          <p>
            Seattle Public Utilities, which runs the RainWise program with King
            County’s Wastewater Treatment Division, offers a rebate to residents
            in targeted sewer basin locales to cover the costs of the two more
            expensive interventions: installing a cistern and installing a rain
            garden.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section9 = () => {
  return (
    <div className={cx(styles.section9, styles.textWhite, styles.bgSecondary)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.section9Wrapper)}>
          <div className={cx(styles.col, styles.colLeft)}>
            <p>
              To participate in the program, customers determine their
              eligibility on the program website; eligible properties are in
              parts of the city where stormwater enters sewer pipes. Some of
              Seattle’s newly-built buildings are already adapting to comply
              with the current stormwater code.
            </p>
            <p>
              If a homeowner is eligible, they can initiate a cistern or
              rain-garden installation from a list of approved contractors
              working with Seattle Public Utilities. The homeowner selects a
              contractor to perform a home visit and installation.
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
        <div className={cx(styles.col, styles.colRight)} />
        <div className={cx(styles.col, styles.colLeft, styles.textGray)}>
          <p>
            The rebate can be up to $4 per square foot of rooftop runoff, and
            the average rebate is $4,198. Since 2010, RainWise has provided $8.5
            million in rebates to property owners, demonstrating its broad reach
            and use across the city.
          </p>
          <p>
            Over 2,100 RainWise projects have been completed, collectively
            managing over twenty-nine million gallons (sixty three acres of roof
            surface) of stormwater annually.
          </p>
          <p>
            The program contributes to Seattle’s goal of managing seven hundred
            million gallons of stormwater annually using green stormwater
            infrastructure by 2025.
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
        text="The main value of getting our cistern installed was for water conservation. It allows us to collect rainwater that would otherwise flood our home or surrounding streets and use it to water our plants and maintain our garden."
        image="/assets/images/stories/seattle/st_people_jonathan_eisenberg.png"
        authorName="Jonathan Eisenberg"
        authorPosition=""
        authorCompany="RainWise customer"
      />
    </div>
  );
};

const Section12 = () => {
  return (
    <div className={cx(styles.section12, styles.bgWhite)}>
      <div>
        <div className={cx(styles.col, styles.colLeft)} />
        <div className={cx(styles.col, styles.colRight, styles.textGray)}>
          <h5 className={cx(styles.sectionTitle)}>
            Green Stormwater Infrastructure
          </h5>
          <p>
            The RainWise program is making Seattle greener and positively
            impacting people’s emotional and physical wellbeing.
          </p>
          <p>
            Alongside the RainWise Program, Seattle Public Utilities is
            expanding investments in green stormwater infrastructure. These
            include designing rain gardens, floodable public open space, creek
            floodplain improvements, and stormwater capture and reuse.
          </p>
          <p>
            As the City of Seattle addresses stormwater challenges and long-term
            system resilience, investments will focus on reducing impacts in the
            most vulnerable areas, building community-centered partnerships and
            investing in neighborhoods that have experienced historic
            disinvestment.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section13 = () => {
  return (
    <div className={cx(styles.bgSecondary, styles.quoteContainer)}>
      <Quote
        text="We can’t solve everything by ourselves. We need to work in partnership with our community, other city government departments, and with philanthropists."
        image="/assets/images/stories/seattle/st_people_tracy_tackett.jpg"
        authorName="Tracy Tackett"
        authorPosition="GSI EXPANSION INITIATIVE MANAGER"
        authorCompany="City of Seattle Public Utilities"
      />
    </div>
  );
};

const Section14 = () => {
  return (
    <div
      className={cx(
        styles.bgSecondary,
        styles.textWhite,
        styles.footerPageContainer
      )}
    >
      <div>
        <p>
          1 “Does It Always Rain in Seattle?” Seattle Southside Regional Tourism
          Authority, November 5, 2019,
          {' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.seattlesouthside.com/blog/post/does-it-always-rain-in-seattle/#:~:text=A%3A%20On%20average%2C%20Seattle%20gets,inches%20of%20rain%20each%20year"
          >
            https://www.seattlesouthside.com/blog/post/does-it-always-rain-in-seattle/#:~:text=A%3A%20On%20average%2C%20Seattle%20gets,inches%20of%20rain%20each%20year.
          </a>
        </p>
        <p>
          2 Kamaria Hightower, “With New Study Showing Extreme Rainstorms in
          Seattle Area Grew by 30 Percent Since 2003, Mayor Durkan Will
          Highlight Innovative City Initiatives to Combat Climate Change,”
          Seattle Office of the Mayor, January 29, 2018,
          {' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://durkan.seattle.gov/2018/01/with-new-study-showing-extreme-rainstorms-in-seattle-area-grew-by-30-percent-since-2003-mayor-durkan-will-highlight-innovative-city-initiatives-to-combat-climate-change"
          >
            https://durkan.seattle.gov/2018/01/with-new-study-showing-extreme-rainstorms-in-seattle-area-grew-by-30-percent-since-2003-mayor-durkan-will-highlight-innovative-city-initiatives-to-combat-climate-change/.
          </a>
        </p>
        <p>
          3 “Projected Climate Changes,” Seattle Public Utilities,
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.seattle.gov/utilities/protecting-our-environment/community-programs/climate-change/projected-changes"
          >
            https://www.seattle.gov/utilities/protecting-our-environment/community-programs/climate-change/projected-changes.
          </a>
        </p>
        <p>4 Ibid.</p>
      </div>
    </div>
  );
};

const Seattle = () => {
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
      <MetaFooter exploreLink="/explore?id=227569" />
    </div>
  );
};

export default Seattle;
