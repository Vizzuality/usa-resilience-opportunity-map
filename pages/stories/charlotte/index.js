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
            Taking 
            {' '}
            <span className={styles.underline}>Preemptive Action</span>
            <br />
            to Protect Homes and Lives
          </span>
        </div>
        <div className={styles.section1Text}>
          <p>
            Charlotte-Mecklenburg, North Carolina, had long planned for what’s
            known as a twenty-five-year storm—a dangerous flooding event that
            has a probability of occurring only a few times in a century.
          </p>
          <p>
            When Hurricane Michael came in 2018, the city was prepared. But,
            rather than having a gap of more than two decades before the next
            extreme weather event, a second twenty-five-year storm hit within
            months—Hurricane Florence. It destroyed homes, lives, and
            livelihoods.
          </p>
          <p>
            The following year, more heavy rain fell. Again in 2020, as moisture
            along a cold front interacted with the remnants of Hurricane Eta,
            more heavy rain fell, leading to catastrophic floods and devastating
            an already-traumatized community in recovery. The diverse
            communities living in older neighborhoods were most affected, as
            properties there were mainly constructed in the 1970s without
            flood-mitigation measures in mind.
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
        thumbnail="/assets/images/stories/charlotte/ch_video_thumb.png"
        url="https://youtu.be/sJ5fFqQg67k"
      />
    </div>
  );
};

const Section3 = () => {
  return (
    <div className={cx(styles.section3, styles.bgSecondary, styles.textWhite)}>
      <div className={styles.contentRight}>
        <img
          src="/assets/images/stories/charlotte/ch_section_3_bg.png"
          className={styles.section3Img}
          alt=""
        />
      </div>
      <div className={styles.container}>
        <div className={styles.contentLeft}>
          <p>
            Across the United States, floods kill more than one hundred people
            annually and cause vast property damage.1 The Federal Emergency
            Management Agency (FEMA) estimates that repairing and replacing
            flood-damaged roads, bridges, utilities, and other public
            infrastructure cost an estimated $48.6 billion between 1998 and
            2014. 
            {' '}
            <sup>1</sup>
          </p>
          <p>
            In response, Charlotte-Mecklenburg Storm Water Services implemented
            the Quick Buy Program, along with a program of floodplain
            management. It is funded using a combination of FEMA grant money and
            a “rainy-day fund”— money raised from Storm Water Utility Fees to
            ensure there is always ready funding to purchase properties at risk
            of flooding.
          </p>
          <p>
            The program has helped more than seven hundred families and
            businesses safely leave at-risk housing, while one hundred and
            eighty-five acres of public open space have been undeveloped to
            allow the floodplain to function during heavy rain and provide a
            long-term community asset.
          </p>
          <p>
            Storm Water Services estimates these buyouts have avoided $25
            million in losses and will ultimately save over $300 million. More
            importantly, it will save lives.
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
          src="/assets/images/stories/charlotte/ch_section_4_bg.png"
          className={styles.section4Img}
          alt=""
        />
      </div>
      <div className={cx(styles.contentRight, styles.container)}>
        <h5 className={cx(styles.sectionTitle)}>The Quick Buy Program</h5>
        <p>
          People who live in homes in flood-prone areas struggle on various
          fronts. They may find it difficult to get insurance, face property
          devaluation, and are often stuck in homes they can’t sell due to flood
          risk.
        </p>
        <p>
          The Quick Buy Program has been used to purchase eighty of the four
          hundred and thirty flood-prone house, apartment, and building
          acquisitions. Once they are purchased, the program demolishes them and
          repurposes the land as parks or green spaces that absorb floodwater.
        </p>
        <p>
          Risk assessments are created and maintained by Storm Water Services
          for any property that touches the floodplain. Flood risks are
          communicated in a variety of ways throughout the year, including
          through an annual newsletter that is mailed to all floodplain property
          owners. A homeowner can request an assessment from the Storm Water
          Services team to see if they qualify for the program. In some cases,
          they will be encouraged to do this by their insurer or realtor.
        </p>
      </div>
    </div>
  );
};

const Section5 = () => {
  return (
    <div className={cx(styles.section5, styles.bgLightBlue, styles.textGray)}>
      <div className={styles.container}>
        <div className={styles.contentRight}>
          <img
            src="/assets/images/stories/charlotte/ch_section_5_bg.png"
            className={styles.section5Img}
            alt=""
          />
        </div>
        <div className={styles.contentLeft}>
          <h5 className={cx(styles.sectionTitle, styles.textSecondary)}>
            That assessment then measures the property’s flood risk by looking
            at thirteen factors. These include, but are not limited to,
          </h5>
          <ul>
            <li className={cx(styles.listItem)}>building code;</li>
            <li className={cx(styles.listItem)}>
              the probability of water being on the property or reaching the
              building; and
            </li>
            <li className={cx(styles.listItem)}>
              the probability of water reaching other property (e.g., cars).
            </li>
          </ul>
          <p>
            The assessment also considers the long-term benefits of buying the
            flood-prone property, and compares them to the total cost of buying
            that property.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section6 = () => {
  return (
    <div className={cx(styles.section6, styles.bgSecondary, styles.textWhite)}>
      <div className={styles.contentLeft}>
        <img
          src="/assets/images/stories/charlotte/ch_section_6_bg.png"
          className={styles.section6Img}
          alt=""
        />
      </div>
      <div className={cx(styles.contentRight, styles.container)}>
        <h5 className={cx(styles.sectionTitle)}>
          Some of the overall benefits can include
          {' '}
        </h5>
        <br />
        <ul>
          <li className={cx(styles.listItem)}>
            restoration of the natural floodplain to enhance
          </li>
          <li className={cx(styles.listItem)}>
            water quality and the ecosystem;
          </li>
          <li className={cx(styles.listItem)}>safer housing stock;</li>
          <li className={cx(styles.listItem)}>
            increased opportunities for recreation and greenspaces (e.g.,
            creek-side greenways);
          </li>
          <li className={cx(styles.listItem)}>
            less tax money spent on emergency rescues;
          </li>
          <li className={cx(styles.listItem)}>
            less tax money spent on disaster relief; and
          </li>
          <li className={cx(styles.listItem)}>
            less tax money spent to replenish the National Flood Insurance
            Program.
          </li>
        </ul>
        <p>
          This assessment delivers a flood-risk score, which then determines the
          next phase of the intervention.
        </p>
      </div>
    </div>
  );
};

const Section7 = () => {
  return (
    <div className={cx(styles.section7, styles.bgGray, styles.textWhite)}>
      <div className={styles.container}>
        <div className={styles.contentLeft}>
          <h5 className={cx(styles.sectionTitle)}>
            Transforming Flooded Homes into Green Spaces
          </h5>
          <p>
            If the flood risk can be mitigated by property adaptations,
            homeowners can apply for a rebate of the costs of those adaptations
            to make their homes safer.
          </p>
          <p>
            For example, a house may have a crawlspace built underneath the
            property, while the property itself is a few feet above ground
            level. Commonly, air conditioning and heating equipment are stored
            in the crawlspace.
          </p>
          <p>
            While the house itself would be safe from flooding, the equipment is
            not. The rebate program means homeowners can claim up to 75 percent
            of the costs attributed to relocating the equipment. The homeowner
            is responsible for finding and hiring their own contractors and
            giving them control over the action they choose to take.
          </p>
          <p>
            If, however, the flood-risk score means the risk cannot be managed
            by adapting the building, Charlotte-Mecklenburg will purchase the
            property and address the flooding risk by repurposing the land. The
            homeowner or business can then use the money they are paid to buy a
            new home or property.
          </p>
          <p>
            The land is then transformed into green community spaces that also
            effectively absorb floodwater.
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
        text="There were three hundred fifty units that we bought, and we tore them down to make an ecological park out of that property. There are plants, trees, streams, frogs—and this is one of the areas that would have flooded again, if we didn't do that work."
        image="/assets/images/stories/charlotte/ch_people_john_wendel.jpeg"
        authorName="John Wendel"
        authorPosition="Sr. Communications Specialist"
        authorCompany="Charlotte-Mecklenburg Storm Water Services"
      />
    </div>
  );
};

const Section9 = () => {
  return (
    <div className={cx(styles.section9, styles.textGray, styles.bgWhite)}>
      <div>
        <div className={cx(styles.col, styles.colLeft)} />
        <div className={cx(styles.col, styles.colRight)}>
          <p>
            Floodplain buyouts are voluntary. However, about 85 percent of
            owners who go through the appraisal and offer process participate in
            the buyout.
          </p>
          <p>
            Since the program was launched, seven hundred and twenty families
            and businesses have moved to a safer location, and two hundred and
            thirty-three acres of land are now open space.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section10 = () => {
  return (
    <div className={cx(styles.section10, styles.bgSecondary, styles.textWhite)}>
      <div className={styles.container}>
        <div className={styles.contentLeft}>
          <h5 className={cx(styles.sectionTitle)}>Saving for Rainy Days</h5>
          <p>The rainy-day fund initially raised $2 million for the program.</p>
          <p>
            It is crucial to the Quick Buy Program because it allows for rapid
            emergency response. FEMA grants can take a long time to apply for,
            and then to come through—and when a house is flooded or at urgent
            risk of flooding, money is needed immediately. The rainy-day fund
            allows for fast interventions at the point of need.
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
          <p>
            Further, FEMA funds can only be spent on properties that meet
            certain criteria. This could mean that five houses in a neighborhood
            would qualify for the program, and one would not. By using local
            funding via the rainy-day fund, Storm Water Services could offer
            grants to more people and more households that were at risk, driving
            greater participation in the program.
          </p>
          <p>
            The entire floodplain-management program is funded through a
            stormwater utility bill. All property owners are billed based on the
            amount of impervious area on their property. The more water runoff
            produced from a property, the higher its annual stormwater fee.
          </p>
          <p>
            Altogether, there has been $83 million total investment in the
            program (35 percent federal, 2 percent state, 58 percent local, and
            5 percent other).
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
        text="There can't be a one size fits all response for flooding and precipitation conditions because every community is different and has different needs. We have to tailor the available solutions to meet the needs of our communities."
        image="/assets/images/stories/charlotte/ch_people_david_love.jpeg"
        authorName="David Love"
        authorPosition="Project Manager"
        authorCompany="Charlotte-Mecklenburg Storm Water Services
        Engineering and Mitigation Program"
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
          1 Melissa Denchak, “Flooding and Climate Change: Everything You Need
          to Know,” National Resources Defense Council, April 10, 2019,
          {' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.nrdc.org/stories/flooding-and-climate-change-everything-you-need-know."
          >
            https://www.nrdc.org/stories/flooding-and-climate-change-everything-you-need-know..
          </a>
        </p>
      </div>
    </div>
  );
};

const Charlotte = () => {
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
      <MetaFooter exploreLink="/explore?id=226549" />
    </div>
  );
};

export default Charlotte;
