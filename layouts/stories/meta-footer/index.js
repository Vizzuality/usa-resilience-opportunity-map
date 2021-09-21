import React from 'react';

import cx from 'classnames';

import Button from 'components/button';
import styles from './styles.module.scss';
// import globalStyles from '../styles.module.scss';

const MetaFooter = () => {
  return (
    <div className={cx(styles.metaFooter)}>
      <div className={cx(styles.metaFooterContent, styles.wrapper)}>
        <Button
          className={cx(styles.exploreBtn)}
          link="/stories"
          aria-label="go to stories menu"
        >
          Go to stories menu
        </Button>
        <Button
          className={cx(styles.exploreBtn)}
          link="/explore"
          aria-label="explore data for this area"
        >
          Explore data for this area
        </Button>
      </div>
    </div>
  );
};

export default MetaFooter;
