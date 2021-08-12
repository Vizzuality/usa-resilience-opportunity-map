import React from 'react';
import PropTypes from 'prop-types';
import Flicking from '@egjs/react-flicking';

import StoriesMain from 'layouts/stories';

import styles from './styles.module.scss';

const STORIES = [
  {
    title: 'story1',
  },
  {
    title: 'story2',
  },
];

const Story = ({ title }) => {
  return (
    <div className={styles.Story}>
      <div className={styles.StoryTitle}>{title}</div>
    </div>
  );
};

Story.propTypes = {
  title: PropTypes.string,
};

const Stories = () => {
  return (
    <StoriesMain>
      <Flicking
        align="prev"
        horizontal={false}
        style={{
          width: '100%',
        }}
      >
        {STORIES.map((story) => (
          <Story title={story.title} />
        ))}
      </Flicking>
    </StoriesMain>
  );
};

export default Stories;
