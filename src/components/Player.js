import React, { useState } from "react";

const Player = ({ currentTrack }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // Add play/pause functionality using HTML audio element or Web Audio API
  };

  return (
    <div>
      <h3>Now Playing: {currentTrack.title}</h3>
      <p>{currentTrack.artist}</p>
      <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
};

export default Player;
