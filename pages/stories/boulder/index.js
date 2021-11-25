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
            Helping Homeowners
            <br />
            Help Themselves in the
            <br />
            Face of 
            {' '}
            <span className={styles.underline}>Wildfire Risk</span>
          </span>
        </div>
        <div className={styles.section1Text}>
          <p>
            Wildfires have become an increasingly frequent and devastating event
            in Boulder, Colorado as a warming climate and degraded forest
            conditions turn the city’s surrounding area into a tinderbox.
          </p>
          <p>
            The city is adjacent to one hundred and twenty thousand acres of
            undeveloped land that represents a clear wildfire risk. In 2010, the
            Fourmile Fire destroyed one hundred and sixty-nine homes and 6,181
            acres, and led to $217 million in insured losses.
          </p>
          <p>
            To help Boulder county residents make their homes more resilient to
            that risk, a partnership of over forty organizations, including
            national and local government agencies, private insurance companies,
            realtors, and homeowners formed the Wildfire Partners program in
            2014.
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
        thumbnail="/assets/images/stories/boulder/bo_video_thumb.png"
        url="https://youtu.be/6PGyRolwFVo"
      />
    </div>
  );
};

const Section3 = () => {
  return (
    <div className={styles.section3}>
      <div>
        <div className={cx(styles.col, styles.colLeft)} />
        <div className={cx(styles.col, styles.colRight)}>
          <p>
            Adjacent to the Wildfire Partners program, the Boulder Fire
            Department has a dedicated wildfire team working with residents to
            identify risks and recommend sustainable and affordable home
            modifications.
          </p>
          <p>
            Boulder is not alone; wildfires have become an increasingly visible
            sign of the climate emergency in the United States. In 2020, there
            were 58,950 wildfires across the nation, compared with 50,477 in
            2019.
            <sup>1</sup>
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
            src="/assets/images/stories/boulder/bo_section_4_image.png"
            className={styles.section4Img}
            alt=""
          />
        </div>
        <div className={styles.contentLeft}>
          <h5 className={cx(styles.sectionTitle)}>
            &quot;We Needed a More Professional Organization&quot;
          </h5>
          <p>
            Wildfires were once confined to the summer season, but have become
            more common in recent years. In 2020, firefighters in Boulder were
            deployed to fight wildfires in December—a month previously free from
            risk. Peak fire season had always been July, August, and September,
            not mid-winter.
          </p>
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
          src="/assets/images/stories/boulder/bo_section_5_image.png"
          className={styles.section5Img}
          alt=""
        />
      </div>
      <div className={cx(styles.contentRight, styles.container)}>
        <p>The impacts of wildfires on Boulder’s residents include</p>
        <ul>
          <li className={cx(styles.listItem)}>
            millions of dollars’ worth of property damage;
          </li>
          <li className={cx(styles.listItem)}>destruction of homes;</li>
          <li className={cx(styles.listItem)}>
            resourcing issues, such as firefighters being deployed to fight
            wildfires away from their own districts;
          </li>
          <li className={cx(styles.listItem)}>
            deteriorating air quality exacerbating respiratory conditions like
            asthma;
          </li>
          <li className={cx(styles.listItem)}>
            anxiety, depression, and emotional distress; and
          </li>
          <li className={cx(styles.listItem)}>death</li>
        </ul>
      </div>
    </div>
  );
};

const Section6 = () => {
  return (
    <div className={cx(styles.section6, styles.textGray, styles.bgLightBlue)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.section6Wrapper)}>
          <p>
            Homes on the Wildfire Urban Interface, or edges of the city where
            homes are closest to wildland vegetation, face the highest risk.
            These neighborhoods tend to be demographically diverse, with higher
            property values.
          </p>
          <p>
            Historically, the Boulder Fire Department would pull in a temporary
            workforce to tackle the wildfires. When their growing frequency made
            this approach unsustainable, the department took a more strategic
            approach to manage risk, hiring experienced fire and project
            managers.
          </p>
          <p>At the same time, they sought to answer three key questions.</p>
          <ul>
            <li className={cx(styles.listItem)}>
              How do we make our residents more resilient to the wildfire risk?
            </li>
            <li className={cx(styles.listItem)}>
              Can we help our residents help themselves?
            </li>
            <li className={cx(styles.listItem)}>
              How do we do outreach and education that promote mitigation?
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Section7 = () => {
  return (
    <div className={cx(styles.bgPrimary, styles.quoteContainer)}>
      <Quote
        text="We need firefighters and other first responders to help protect structures —but they alone cannot save every home."
        image="/assets/images/stories/boulder/bo_people_jim_webster.jpg"
        authorName="Jim Webster"
        authorPosition="Program Coordinator"
        authorCompany="Wildfire Partners"
      />
    </div>
  );
};

const Section8 = () => {
  return (
    <div className={cx(styles.section8, styles.textGray, styles.bgWhite)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.section8Wrapper)}>
          <h5 className={cx(styles.sectionTitle)}>Wildfire Partners</h5>
          <p>
            The Wildfire Partners program brings together the private and public
            sectors, including local fire departments, realtors, local
            businesses, and insurance companies. The most critical partner is
            the homeowner.
          </p>
          <p>
            The program begins with a wildfire-mitigation specialist—such as a
            former fire chief or forester—visiting an individual’s property and
            conducting a detailed, fifty-point assessment to determine wildfire
            vulnerability.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section9 = () => {
  return (
    <div className={cx(styles.section9, styles.textWhite, styles.bgGray)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.section9Wrapper)}>
          <p>
            Once the assessment is complete, the specialist develops a
            customized action plan that includes a checklist of adaptations to
            increase the property&quot;s resilience against fire risk. Examples
            include
          </p>
          <ul>
            <li className={cx(styles.listItem)}>
              upgrading from a shake-shingle roof to a metal or tiled roof;
            </li>
            <li className={cx(styles.listItem)}>
              screening vents to prevent embers from entering the home;
            </li>
            <li className={cx(styles.listItem)}>
              Removing combustible materials, including from under decking
            </li>
            <li className={cx(styles.listItem)}>
              removing combustible materials, including from under decking; and
            </li>
            <li className={cx(styles.listItem)}>
              cleaning gutters of pine needles and other debris.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Section10 = () => {
  return (
    <div className={cx(styles.section10, styles.textGray, styles.bgWhite)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.section10Wrapper)}>
          <p>
            Grants from federal, states, and local sources may provide
            homeowners with financial support to cover 50 percent, or up to
            $2000, for the costs of tree thinning.
          </p>
          <p>
            Homeowners who complete their checklist are issued a Wildfire
            Partners Certificate that demonstrates their property&quot;s
            resilience to wildfire risk and helps them obtain insurance.
          </p>
          <p>
            The Wildfire Partners program sends out mailings and advertises the
            program on the government website. The program is also communicated
            to homeowners through insurance and realty partners—both of which
            have a commercial interest in making sure homes are not lost to
            fires.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section11 = () => {
  return (
    <div className={cx(styles.section11, styles.bgLightBlue, styles.textGray)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.section11Aside)}>
          It has worked with 2,500 households and now brings between 400-500 new
          residents onboard each year.
        </div>
        <div className={cx(styles.section11Wrapper)}>
          <p>
            Perhaps the most important form of communication, however, is
            community interaction. Homeowners who have had a positive program
            experience, and have effectively reduced their wildfire risk as a
            result, often recommend the program to neighbors.
          </p>
          <p>
            Since the Wildfire Partners program was launched eight years ago, it
            has worked with 2,500 households and now brings between 400–500 new
            residents onboard each year.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section12 = () => {
  return (
    <div className={cx(styles.bgSecondary, styles.quoteContainer)}>
      <Quote
        text="You become a wildfire partner, and you learn new ideas. You're adapting to a new climate where you have to prepare for wildfires. So, the idea is to keep getting more people in the program and then continue to keep them engaged—continue to act, to maintain their mitigation and to move forward."
        image="/assets/images/stories/boulder/bo_people_jim_webster.jpg"
        authorName="Jim Webster"
        authorPosition="Program Coordinator"
        authorCompany="Wildfire Partners"
      />
    </div>
  );
};

const Section13 = () => {
  return (
    <div className={styles.section13}>
      <div>
        <div className={cx(styles.col, styles.colRight)} />
        <div className={cx(styles.col, styles.colLeft)}>
          <h5 className={cx(styles.sectionTitle)}>
            The Wildfire Home Assessment Project
          </h5>
          <p>
            In 2019, the Boulder Fire Department began quantifying the risk
            caused to homes by wildfires through the Wildfire Home Assessment
            Project. The assessments are conducted in two phases.
          </p>
          <p>
            The first is a curbside home assessment, in which a member of the
            Wildfire Division visits neighborhoods and assesses a home’s fire
            risk by looking at
          </p>
          <ul>
            <li className={cx(styles.listItem)}>fuels on the property;</li>
            <li className={cx(styles.listItem)}>construction types; and</li>
            <li className={cx(styles.listItem)}>access issues.</li>
          </ul>
          <p>
            The fire department informs residents by mail that it will be
            conducting curbside assessments.
          </p>
          <p>
            The curbside assessments also provide an opportunity to educate the
            local community about fire risk, through conversations with local
            residents who are curious about what’s happening in their area.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section14 = () => {
  return (
    <div className={cx(styles.section14, styles.textWhite, styles.bgGray)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.section14Wrapper)}>
          <p>
            From the curbside assessment, the department color codes a home’s
            risk to wildfire. The data collected are then used to populate a
            digital map illustrating areas at higher risk.
          </p>
          <p>
            Through community interaction, online webinars, and information on
            the fire department’s website, residents can view the map to
            determine if their home is located in an at-risk area. They can use
            this information to request a detailed wildfire home assessment.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section15 = () => {
  return (
    <div className={cx(styles.bgWhite, styles.section15)}>
      <h5 className={cx(styles.title)}>Golden Advice</h5>
      <p className={cx(styles.text)}>
        Both the Wildfire Partners program and the Wildfire Home
        <br />
        Assessment Project recognize the importance of working in
        <br />
        partnership with other agencies to create more resilient communities.
      </p>
    </div>
  );
};

const Section16 = () => {
  return (
    <div className={cx(styles.section16, styles.bgLightBlue)}>
      <div>
        <div className={cx(styles.col, styles.colRight)} />
        <div className={cx(styles.col, styles.colLeft)}>
          <p>
            With the invitation of the homeowner, the Boulder Fire Department
            then takes a more detailed survey. This additional survey is
            available to anyone who assesses their risk on the map and requests
            more information. It is designed to move the homeowner from
            awareness that they are at risk—the map’s purpose—to action.
          </p>
          <p>
            The department provides specific, tailored recommendations in a
            written report that allows the homeowner to take interventions that
            mitigate their fire risk. These include
          </p>
          <ul>
            <li className={cx(styles.listItem)}>
              removing debris in the garden/driveway;
            </li>
            <li className={cx(styles.listItem)}>removing flammable fuels;</li>
            <li className={cx(styles.listItem)}>cleaning guttering; and</li>
            <li className={cx(styles.listItem)}>keeping lawns watered.</li>
          </ul>
          <p>
            On occasion, larger interventions—such as tree removal or driveway
            modifications to improve access—are required. These home
            improvements ensure risk reduction and wildfire prevention.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section17 = () => {
  return (
    <div className={cx(styles.section17, styles.textGray, styles.bgWhite)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.section17Wrapper)}>
          <p className={cx(styles.text)}>
            Following the assessment, the homeowner can contact the fire
            department with any follow-up queries or concerns by contacting its
            hotline. The fire department is active on social media, has a
            monthly newsletter, sends out targeted emails on specific topics and
            opportunities, runs community events in person and online, and
            offers recertification site visits and reassessments.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section18 = () => {
  return (
    <div className={cx(styles.bgPrimary, styles.quoteContainer)}>
      <Quote
        text="Don't do it in a vacuum. Involve all your partners. The Fire
          Department, city management, insurance companies, homeowners
          associations, other fire districts, utility companies can all help you get
          your message out there. And especially: the community. Once you get
          homeowner buy-in, you don’t have to do forced mitigation.
          Homeowners want to help themselves."
        image="/assets/images/stories/boulder/bo_people_oliver_brian.jpg"
        authorName="Brian Oliver"
        authorPosition="Wildland Fire Division Chief"
        authorCompany="Boulder Fire Department"
      />
    </div>
  );
};

const Section19 = () => {
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
          1 “Facts and Statistics: Wildfires,” Insurance Information Institute,
          {' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.iii.org/fact-statistic/facts-statistics-wildfires#:~:text=2020%3A%20In%202020%20there%20were,4.7%20million%20acres%20in%202019"
          >
            https://www.iii.org/fact-statistic/facts-statistics-wildfires#:~:text=2020%3A%20In%202020%20there%20were,4.7%20million%20acres%20in%202019.
          </a>
        </p>
      </div>
    </div>
  );
};

const Boulder = () => {
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
      <Section19 />
      <MetaFooter exploreLink="/explore?id=224850" story="boulder" />
    </div>
  );
};

export default Boulder;
