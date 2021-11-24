import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import Button from 'components/button';
import styles from './styles.module.scss';

const MetaFooter = ({ exploreLink /* , story */ }) => {
  // const onDownload = (name) => {
  //   const url = `${process.env.NEXT_PUBLIC_API}/downloads/${name}?format=pdf`;
  //   const link = document.createElement('a');
  //   link.href = url;
  //   link.setAttribute('download', `map-${name}.pdf`);
  //   document.body.appendChild(link);
  //   link.click();
  //   link.remove();
  // };

  return (
    <div className={cx(styles.metaFooter)}>
      <div className={cx(styles.metaFooterContent, styles.wrapper)}>
        <Button
          className={cx(styles.downloadBtn)}
          aria-label="download infographic"
          // onClick={() => onDownload(story)}
        >
          Download infographic
        </Button>
        <div className={cx(styles.rightBtns)}>
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
    </div>
  );
};

MetaFooter.propTypes = {
  exploreLink: PropTypes.string,
  // story: PropTypes.string,
};

export default MetaFooter;
