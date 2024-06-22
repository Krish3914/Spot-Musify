import React, { useState, useEffect } from "react";
import axios from "axios";

const MusicLibrary = () => {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    const fetchMusic = async () => {
      const response = await axios.get("/api/music");
      setMusic(response.data);
    };
    fetchMusic();
  }, []);

  return (
    <div>
      {music.map((song) => (
        <div key={song._id}>
          <h3>{song.title}</h3>
          <p>{song.artist}</p>
        </div>
      ))}
    </div>
  );
};

export default MusicLibrary;
