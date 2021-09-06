import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

const VideoPlayer = ({ url }) => {
  return (
    <ReactPlayer
      url={url}
      loop
      muted
      width="auto"
      height="auto"
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
            controls: 0,
            showinfo: 1,
            rel: 0,
          },
        },
      }}
    />
  );
};

VideoPlayer.propTypes = {
  url: PropTypes.string,
};

export default VideoPlayer;
