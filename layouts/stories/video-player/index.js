import React from 'react';
import ReactPlayer from 'react-player/lazy';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const VideoPlayer = ({ thumbnail, url }) => {
  return (
    <div className={styles.reactVideoPlayer}>
      <ReactPlayer
        className="react-player"
        url={url}
        loop
        width="auto"
        height="auto"
        light={thumbnail}
        style={{
          width: 'auto',
          height: 'auto',
          minWidth: '100%',
          minHeight: '100%',
        }}
        playing
        config={{
          youtube: {
            playerVars: {
              controls: true,
              showinfo: 0,
              rel: 0,
            },
          },
        }}
      />
    </div>
  );
};

VideoPlayer.propTypes = {
  thumbnail: PropTypes.string,
  url: PropTypes.string,
};

export default VideoPlayer;
