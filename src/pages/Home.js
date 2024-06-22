import React from "react";
import MusicLibrary from "../components/MusicLibrary";
import Search from "../components/Search";
import Player from "../components/Player";

const Home = () => {
  return (
    <div>
      <Search />
      <MusicLibrary />
      <Player
        currentTrack={{ title: "Sample Track", artist: "Sample Artist" }}
      />
    </div>
  );
};

export default Home;
