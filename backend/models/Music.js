const mongoose = require("mongoose");

const MusicSchema = new mongoose.Schema({
  title: String,
  artist: String,
  album: String,
  genre: String,
  url: String,
});

module.exports = mongoose.model("Music", MusicSchema);
