import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import Button from 'components/button';
import styles from './styles.module.scss';
// import globalStyles from '../styles.module.scss';

const MetaFooter = ({ exploreLink }) => {
  return (
    <div className={cx(styles.metaFooter)}>
      <div className={cx(styles.metaFooterContent, styles.wrapper)}>
        <Button
          className={cx(styles.storiesBtn)}
          link="/stories"
          aria-label="go to stories menu"
        >
          Go to stories menu
        </Button>
        <Button
          className={cx(styles.exploreBtn)}
          link={exploreLink}
          aria-label="explore data for this area"
        >
          Explore data for this area
        </Button>
      </div>
    </div>
  );
};

MetaFooter.propTypes = {
  exploreLink: PropTypes.string,
};

export default MetaFooter;
