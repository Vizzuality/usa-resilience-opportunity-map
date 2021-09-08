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
            In Louisville, trees
            <br />
            provide a 
            {' '}
            <span className={styles.underline}>green solution</span>
            <br />
            to health inequality
          </span>
        </div>
        <div className={styles.section1Text}>
          <p>
            A study by Dr. Brian Stone found that Louisville, Kentucky, had the
            fastest-growing urban heat island in the country exacerbated by a
            low tree canopy in deprived regions of the city. The impact is
            deadly: heat-related ailments contribute to the deaths of 86
            Louisville residents each year.
          </p>
          <p>
            This led to a nature-based solution designed to increase the tree
            canopy in the city’s most deprived areas, develop community parks,
            increase wellbeing, and boost health outcomes for its residents.
          </p>
          <p>
            In response, Louisville Metro took Stone’s data, commissioned an
            Urban Tree Cover Assessment study to understand where there was a
            correlation between extreme heat and tree cover, and collaborated
            with grassroots organizations, business owners and citizens to
            tackle the heat island effect.
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
    <div className={styles.section3}>
      <div>
        <div className={cx(styles.col, styles.colLeft)} />
        <div className={cx(styles.col, styles.colRight)}>
          <h5 className={cx(styles.sectionTitle)}>
            What is the urban heat island effect?
          </h5>
          <p>
            The “urban heat island effect” is a growing problem in US cities
            where extreme heat kills 1,300 people every year. Urban heat islands
            occur when cities replace natural land cover with dense
            concentrations of pavement, buildings, and other surfaces that
            absorb and retain heat. This effect increases energy costs (e.g.,
            for air conditioning), air pollution levels, and heat-related
            illness and mortality.
          </p>
          <p>
            Overnight, when temperatures usually drop, the built in structures
            of the city don’t cool down. This makes the following day even
            hotter and the impact even more deadly.
          </p>
          <h5 className={cx(styles.sectionTitle)}>
            The urban heat island in Louisville
          </h5>
          <p>
            Dr. Stone’s study and the Urban Tree Cover Assessment revealed
            serious inequities in the city. The most deprived, primarily
            African-American neighborhoods, had the lowest tree cover and
            experienced the worst health impacts of extreme heat – including
            heat stress and heat stroke, as well as cardiac arrest and stroke –
            particularly in older people with underlying health conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section4 = () => {
  return (
    <div className={cx(styles.bgGray, styles.quoteContainer)}>
      <Quote
        text="Extreme heat is really experienced by more vulnerable populations.
        The biggest health issue was not the day temperatures, but the night temperatures.
        When night is terribly hot, that’s when there's major health risks of heat stroke or death."
        image="/assets/images/stories/louisville/lv_people_julie_donna.jpg"
        authorName="Julie Donna"
        authorPosition="Sustainability Coordinator"
        authorCompany="Office of Advanced Planning & Sustainability, Louisville Metro Government"
      />
    </div>
  );
};

const Section5 = () => {
  return (
    <div className={cx(styles.section5, styles.textGray, styles.bgWhite)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.section5Wrapper)}>
          <p>
            On an infrastructure level, extreme heat disrupts transport – making
            rail and buses unusable. This is a particular issue in deprived
            areas where people are more reliant on public transport and less
            likely to own cars. When transport infrastructure is disrupted,
            people are forced to walk in hot weather – exacerbating the issue of
            heat and health.
          </p>
          <p>
            The correlation between low tree canopy, health outcomes and
            inequality were terrifyingly stark.
          </p>
          <p>
            Lower tree canopy was concentrated in Louisville&apos;s poorest,
            formerly “redlined” neighborhoods where tree cover was around 22%
            and temperatures were up to 10°F (5.6°C) higher than well-vegetated
            zones. In contrast, wealthier, “green line” districts had up to 49%
            tree cover. Life expectancy in low tree canopy neighborhoods was
            around 70 years, compared to 83 years in the wealthier east of the
            city.
          </p>
        </div>
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
            Expansion of tree canopy in Downtown Louisville by 15% to 33 % was
            associated with reductions in estimated heat-related mortality
            between 5% and 28%.
          </p>
          <p>
            Louisville Metro&apos;s response to becoming the fastest growing
            urban heat island was to invest in building the tree canopy, a
            nature-based solution to rising temperatures. In response to the
            Urban Tree Cover Assessment, they set up a nonprofit organization
            that would be responsible solely for improving the urban tree
            canopy: Trees Louisville.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section7 = () => {
  return (
    <div className={styles.section7}>
      <div>
        <div className={cx(styles.col, styles.colRight)} />
        <div className={cx(styles.col, styles.colLeft)}>
          <h5 className={cx(styles.sectionTitle)}>
            Working together to transform green space and public health
          </h5>
          <p>
            To help determine how and where to increase the tree canopy in
            Louisville, Dr. Stone’s study assumed a green area ratio policy
            which sets minimum green cover targets for all residential,
            commercial, and industrial sites.
          </p>
          <p>
            Meeting those green cover targets was the task of Trees Louisville,
            as well as a second NGO called Louisville Grows.
          </p>
          <p>
            Using the data from the Urban Tree Canopy Assessment, Trees
            Louisville:
          </p>
          <ul>
            <li className={cx(styles.listItem)}>
              1. Worked with the school system – the centrality of schools and
              the size of the properties gave huge opportunity to provide
              natural environments for entire neighborhoods
            </li>
            <li className={cx(styles.listItem)}>
              2. Identified local large property owners in industrialized spaces
              lacking tree cover before setting up meetings to invite them to
              grow trees on their sites
            </li>
            <li className={cx(styles.listItem)}>
              3. Collaborated with the Kentucky Transportation Cabinet to plant
              trees alongside busy roads – helping tackle extreme heat, noise
              pollution, and air pollution.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Section8 = () => {
  return (
    <div className={cx(styles.section8, styles.textGray, styles.bgWhite)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.section8Wrapper)}>
          <p>
            Having identified the school system as a great target for
            tree-planting, Trees Louisville approached the Jefferson County
            Public School System to discuss planting trees on their land.
          </p>
          <p>
            Jefferson County Public School System was chosen based on three
            metrics:
          </p>
          <ul>
            <li className={cx(styles.listItem)}>
              1. It covered a large amount of land in Louisville – over 4,050
              acres.
            </li>
            <li className={cx(styles.listItem)}>
              2. Much of that land lacked tree cover but was able to support
              trees.
            </li>
            <li className={cx(styles.listItem)}>
              3. Working with schools would promote education about climate
              resilience in the community.
            </li>
          </ul>
          <p>Louisville Grows:</p>
          <ul>
            <li className={cx(styles.listItem)}>
              1. Approached homeowners, inviting them to plant a tree in their
              gardens.
            </li>
            <li className={cx(styles.listItem)}>
              2. Convened tree planting events, during which volunteers
              collaborated with community members to create greener and
              healthier neighborhoods.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Section9 = () => {
  return (
    <div
      className={cx(styles.bgPrimary, styles.section9, styles.quoteContainer)}
    >
      <Quote
        text="Look at the data. It’s how you can determine where tree canopy improvement is needed the most."
        image="/assets/images/stories/louisville/lv_people_cindi_sullivan.jpeg"
        authorName="Cindi Sullivan"
        authorPosition="Executive Director"
        authorCompany="Trees Louisville"
      />
    </div>
  );
};

const Section10 = () => {
  return (
    <div className={styles.section10}>
      <div>
        <div className={cx(styles.col, styles.colRight)} />
        <div className={cx(styles.col, styles.colLeft)}>
          <h5 className={cx(styles.sectionTitle)}>Parkland Plaza</h5>
          <p>
            The final green intervention in Louisville is Parkland Plaza, an
            ongoing project in the Parkland district, a primarily Black
            neighborhood.
          </p>
          <p>
            The city was awarded a $42,000 grant from Partners for Places to
            transform a historic park in the area.
          </p>
          <p>
            Louisville Metro set up a series of public meetings to consult on
            what a public park could look like while ensuring any plans would
            also reduce urban heat.
          </p>
          <p>The ambition is to:</p>
          <ul>
            <li className={cx(styles.listItem)}>
              Increase the tree canopy in the park – including by planting trees
              to shade a community garden that already exists onsite.
            </li>
            <li className={cx(styles.listItem)}>
              Develop a parking lot using cool pavements.
            </li>
            <li className={cx(styles.listItem)}>
              Ensure any building is completed with natural materials.
            </li>
          </ul>
          <p>
            All three measures – trees, cool pavements and use of natural
            materials – are designed to eliminate the urban heat island effect
            to the greatest extent possible.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section11 = () => {
  return (
    <div className={cx(styles.section11, styles.textWhite, styles.bgGray)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.section11Wrapper)}>
          <h5 className={cx(styles.sectionTitle)}>
            “We all know that plant person connection”
          </h5>
          <p>
            Two methods ensured the success of Louisville’s extreme heat
            intervention.
          </p>
          <p>
            Data: The Urban Tree Canopy Assessment gave the city the data to
            identify which communities were lacking tree cover, so they could
            target the solution to those who needed it most. They are now
            targeting commercial property owners.
          </p>
          <p>
            Community engagement: For Parkland Plaza in particular, members of
            the Parkland Association talk about the initiative with their
            customers, neighbors, and friends, encouraging community buy-in and
            participation through word of mouth.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section12 = () => {
  return (
    <div className={styles.section12}>
      <div>
        <div className={cx(styles.col, styles.colRight)} />
        <div className={cx(styles.col, styles.colLeft)}>
          <p>
            Since the initiative started, Trees Louisville and Louisville Grows
            have planted upwards of 13,000 trees. A city ordinance has been
            passed protecting trees on private land and setting requirements for
            the minimum percentage of tree canopy cover in certain public
            spaces.
          </p>
          <p>
            Each additional square meter of tree canopy or grass added across
            Louisville was found to yield temperature reductions 1.2 times
            greater than each square meter of other interventions, such as
            reflective roofing or paving.
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
        text="Trees and green infrastructure aren’t a luxury. They’re an invaluable asset to this community."
        image="/assets/images/stories/louisville/lv_people_cindi_sullivan.jpeg"
        authorName="Cindi Sullivan"
        authorPosition="Executive Director"
        authorCompany="Trees Louisville"
      />
    </div>
  );
};

const Louisville = () => {
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
    </div>
  );
};

export default Louisville;
