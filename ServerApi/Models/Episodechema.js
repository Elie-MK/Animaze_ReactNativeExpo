const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EpisodeSchema = new Schema(
    {
      titleEpisode: String,
      imgEpisode: String,
      link: String,
      date: {
        type: Date,
        default: Date.now,
      },
    },

);

const Episodes =mongoose.model("Episodes", EpisodeSchema); 

module.exports = Episodes


