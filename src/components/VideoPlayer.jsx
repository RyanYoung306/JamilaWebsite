import React from 'react';
import './VideoPlayer.css';
const VideoPlayer = ({ src, width, height }) => {
  return (
    <video width={width} height={height} controls>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;