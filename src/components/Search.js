import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/music/search?q=${query}`);
      // setResults(response.data);
      setResults(response.data.tracks.items); 
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for songs, albums, artists..."
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {results.map((result) => (
          <div key={result._id}>
            // <h3>{result.title}</h3>
            // <p>{result.artist}</p>
            <h3>{result.name}</h3>
            <p>{result.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
