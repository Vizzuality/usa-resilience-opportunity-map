import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

export default function StoriesMain({ children }) {
  StoriesMain.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return <main className={styles.storiesWrapper}>{children}</main>;
}
