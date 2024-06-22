const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/search", async (req, res) => {
  try {
    const { q } = req.query; // Query parameter from frontend
    const spotifyApiUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(
      q
    )}&type=track`;

    const accessToken = await getAccessToken();
    const response = await axios.get(spotifyApiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    res.json(response.data);
  } catch (err) {
    console.error("Error:", err.response.data);
    res.status(err.response.status || 500).json({ error: err.message });
  }
});

async function getAccessToken() {
  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      "grant_type=client_credentials",
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
          ).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data.access_token;
  } catch (err) {
    throw new Error("Failed to fetch access token from Spotify API");
  }
}

module.exports = router;

// const express = require("express");
// const Music = require("../models/Music");

// const router = express.Router();

// router.get("/search", async (req, res) => {
//   try {
//     const query = req.query.q;
//     const results = await Music.find({ title: new RegExp(query, "i") });
//     res.json(results);
//   } catch (err) {
//     res.status(500).send("Server Error");
//   }
// });
// // router.get("/", async (req, res) => {
// //   const music = await Music.find();
// //   res.json(music);
// // });

// // router.get("/:id", async (req, res) => {
// //   const music = await Music.findById(req.params.id);
// //   res.json(music);
// // });

// module.exports = router;
