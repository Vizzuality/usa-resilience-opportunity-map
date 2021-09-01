import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import styles from './styles.module.scss';
import globalStyles from '../styles.module.scss';

const Quote = ({ text, image, authorName, authorPosition, authorCompany }) => {
  return (
    <div className={cx(globalStyles.textWhite)}>
      <div className={globalStyles.container}>
        <div className={cx(styles.quoteContainer)}>
          <div className={cx(styles.quoteText)}>{`“${text}”`}</div>
          <div className={cx(styles.quoteAuthor)}>
            <div className={cx(styles.quoteImage)}>
              <img src={image} alt={authorName} />
            </div>
            <div className={cx(styles.quoteInfo)}>
              <div className={styles.quoteAuthorName}>{authorName}</div>
              <div className={styles.quoteAuthorPosition}>{authorPosition}</div>
              <div className={styles.quoteAuthorCompany}>{authorCompany}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Quote.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  authorName: PropTypes.string,
  authorPosition: PropTypes.string,
  authorCompany: PropTypes.string,
};

export default Quote;
