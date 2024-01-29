import React from 'react';
import './VideoPlayer.css';
const VideoPlayer = ({ src, width, height }) => {
  return (
    <iframe
      src={src}
      frameBorder="0"
      width={width}
      height={height}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default VideoPlayer;