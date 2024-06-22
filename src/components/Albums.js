import React, { useState, useEffect } from "react";
import axios from "axios";

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      const response = await axios.get("/api/albums");
      setAlbums(response.data);
    };
    fetchAlbums();
  }, []);

  return (
    <div>
      {albums.map((album) => (
        <div key={album._id}>
          <h3>{album.name}</h3>
          <p>{album.artist}</p>
        </div>
      ))}
    </div>
  );
};

export default Albums;
