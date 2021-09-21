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
            Helping homeowners
            <br />
            help themselves in the
            <br />
            face of 
            {' '}
            <span className={styles.underline}>wildfire risk</span>
          </span>
        </div>
        <div className={styles.section1Text}>
          <p>
            Wildfires have become an increasingly frequent and devastating event
            in Boulder, Colorado as a warming climate and degraded forest
            conditions turn the city’s surrounding area into a tinderbox.
          </p>
          <p>
            The city is adjacent to 120,000 acres of undeveloped land that
            represents a clear wildfire risk. In 2010 the Fourmile Fire
            destroyed 169 homes, 6181 acres and led to $217 million in insured
            losses.
          </p>
          <p>
            Now, to help Boulder residents make their homes more resilient to
            that risk, a coalition of national and local government agencies,
            private insurance companies, realtors, and homeowners formed the
            Wildfire Partners program in 2014.
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
        url="https://www.youtube.com/watch?v=eQHtgmlT4EM&ab_channel=AtlanticCouncil"
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
            Alongside the Wildfire Partners program, the Boulder Fire Department
            has a dedicated wildfire team working with residents to identify
            risks and recommend sustainable and affordable home modifications.
          </p>
          <p>
            Boulder is not alone: wildfires have become an increasingly visible
            sign of the climate emergency in the US. In 2020, there were 58,950
            wildfires across the nation, compared with 50,477 in 2019.
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
            &quot;We needed a more professional organization&quot;
          </h5>
          <p>
            Wildfires were once confined to the summer season but have become
            more common in recent years. In 2020, firefighters in Boulder were
            deployed to fight wildfires in December – a month typically free
            from risk. Peak fire season had always been July, August and
            September, not mid-winter.
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
        <p>The impact of wildfires on Boulder’s residents ranges from:</p>
        <ul>
          <li className={cx(styles.listItem)}>
            Millions of dollars worth of property damage
          </li>
          <li className={cx(styles.listItem)}>Destruction of homes</li>
          <li className={cx(styles.listItem)}>
            Resourcing issues – firefighters deployed to fight wildfires away
            from their own districts
          </li>
          <li className={cx(styles.listItem)}>
            Deteriorating air quality exacerbating respiratory conditions like
            asthma
          </li>
          <li className={cx(styles.listItem)}>
            Anxiety, depression and emotional distress
          </li>
          <li className={cx(styles.listItem)}>Death</li>
        </ul>
      </div>
    </div>
  );
};

const Section6 = () => {
  return (
    <div className={cx(styles.section6, styles.textGray, styles.bgWhite)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.section6Wrapper)}>
          <p>
            Homes on the edges of the city are the worst impacted. These
            neighborhoods tend to be demographically diverse with higher
            property values.
          </p>
          <p>
            Historically, Boulder’s Fire Department would pull in a temporary
            workforce to tackle the wildfires. When their growing frequency made
            this approach unsustainable, the department took a more strategic
            approach to manage risk – hiring experienced fire and project
            managers.
          </p>
          <p>At the same time, they sought to answer three key questions:</p>
          <ul>
            <li className={cx(styles.listItem)}>
              How do we make our residents more resilient to the wildfire risk?
            </li>
            <li className={cx(styles.listItem)}>
              Can we help our residents help themselves?
            </li>
            <li className={cx(styles.listItem)}>
              How do we do outreach and education that promotes mitigation?
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
        text="We need firefighters and other first responders to help people – but they alone cannot solve the wildfire problem."
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
            sector, including the fire department, realtors, local businesses
            and insurance companies. The biggest partner is the homeowner.
          </p>
          <p>
            The program begins with a wildfire mitigation specialist – such as a
            former fire chief or forester – visiting an individual’s property
            and conducting a detailed, 50-point assessment to determine wildfire
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
            Once the assessment is complete, the specialist, together with the
            homeowner, develops a customized checklist of adaptations to
            increase the property’s resilience against fire risk. Examples
            include:
          </p>
          <ul>
            <li className={cx(styles.listItem)}>
              Upgrading from a shake shingle roof to a metal or tiled roof
            </li>
            <li className={cx(styles.listItem)}>
              Screening vents to prevent embers from entering the home
            </li>
            <li className={cx(styles.listItem)}>
              Removing combustible materials, including from under decking
            </li>
            <li className={cx(styles.listItem)}>
              Cleaning gutters of pine needles and other debris
            </li>
            <li className={cx(styles.listItem)}>
              Installing screens and flashing with flame-resistant materials
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
            If the property is located in a forest, Boulder County funds grants
            of up to $2000 to support tree thinning activity.
          </p>
          <p>
            The homeowner is then issued with a certificate they can present to
            their insurance company demonstrating the property’s resilience to
            wildfire risk, which will lower the homeowner’s insurance premium.
          </p>
          <p>
            The Wildfire Partners program is communicated to homeowners through
            insurance and realty partners – both of which have a commercial
            interest in making sure homes are not lost to fires. The program
            also sends out mailings and advertizes the program on the government
            website.
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
          It has worked with 2500 households and now brings between 400-500 new
          residents onboard each year.
        </div>
        <div className={cx(styles.section11Wrapper)}>
          <p>
            Perhaps the most important form of communication, however, is
            community interaction. Homeowners that have had a positive program
            experience and have effectively reduced their wildfire risk as a
            result, often recommend the program to neighbors.
          </p>
          <p>
            Since the Wildfire Partners program was launched eight years ago, it
            has worked with 2500 households and now brings between 400-500 new
            residents onboard each year
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
        text="You become a wildfire partner, and you learn new ideas. You're adapting to a new climate where you have to prepare for
        wildfires. So the idea is to keep getting more people in the program and then continue to keep them engaged – continue
        to act, to maintain their mitigation and to move forward."
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
            In 2019, The Boulder Fire Department began quantifying the risk
            caused to homes by wildfires through the Wildfire Home Assessment
            Project. The assessments are conducted in two phases:
          </p>
          <p>
            The first is a curbside home assessment where a member of the
            Wildfire Division visits neighborhoods and assesses a home’s fire
            risk by looking at:
          </p>
          <ul>
            <li className={cx(styles.listItem)}>Fuels on the property</li>
            <li className={cx(styles.listItem)}>Construction types</li>
            <li className={cx(styles.listItem)}>Access issues</li>
          </ul>
          <p>
            The Fire Department informs residents by mail that they will be
            conducting curbside assessments.
          </p>
          <p>
            The curbside assessments also provide an opportunity to educate the
            local community about fire risk through conversations with local
            residents that are curious to see what’s happening in their area.
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
            From the curbside assessment, the Department color codes a home’s
            risk to wildfire. The data collected is then used to populate a
            digital map illustrating areas at higher risk.
          </p>
          <p>
            Through community interaction, online webinars and information on
            the Fire Department website, residents can view the map to determine
            if their home is located in an at-risk area. They can use this
            information to request a detailed wildfire home assessment.
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
            awareness that they are at risk – the map’s purpose – to action.
          </p>
          <p>
            It provides specific, tailored recommendations in a written report
            that allow the homeowner to take interventions that mitigate their
            fire risk. These include:
          </p>
          <ul>
            <li className={cx(styles.listItem)}>
              Removing debris in the garden/driveway
            </li>
            <li className={cx(styles.listItem)}>Removing flammable fuels</li>
            <li className={cx(styles.listItem)}>Cleaning up guttering</li>
            <li className={cx(styles.listItem)}>Keeping lawns watered</li>
          </ul>
          <p>
            On occasion, larger interventions are required, such as tree removal
            or driveway modifications to improve access. These home improvements
            ensure risk reduction and wildfire prevention.
          </p>
          <p>
            The curbside assessments also provide an opportunity to educate the
            local community about fire risk through conversations with local
            residents that are curious to see what’s happening in their area.
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
            Following the assessment, the homeowner can contact the Fire
            Department with any follow-up queries or concerns by contacting
            their hotline. The Fire Department is active on social media, has a
            monthly newsletter, sends out targeted emails on specific topics and
            opportunities, runs community events in-person and online, and
            offers recertification site visits and re-assessments.
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
      <MetaFooter exploreLink="/explore?id=224850" />
    </div>
  );
};

export default Boulder;
